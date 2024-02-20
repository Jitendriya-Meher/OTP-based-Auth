
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");
require("dotenv").config();

const signupContrller = async ( req, res) => {

    const { email, password } = req.body;

    try{

        const user = await User.findOne({email});

        if( user){
            return res.status(400).json({
                message:"User already exists"
            });
        }

        const securePassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: securePassword
        });

        return res.status(200).json({
            message:"User created successfully",
            user: newUser
        });

    }
    catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const loginController = async( req, res) => {

    const {email, password} = req.body;

    try{
        const user = await User.findOne({
            email  
        });

        if( !user){
            return res.status(404).json({
                message:"user does not exist"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if( !passwordMatch){
            return res.status(404).json({
                message:"password does not match"
            });
        }

        const token = await jwt.sign({
            id:user._id
        },process.env.JWT_SECRET_KEY,{
            expiresIn:"1d"
        });

        res.cookie("token",token,{
            httpOnly:true,
            secure:true
        });

        return res.status(200).json({
            message:"user logged in successfully"
        });

    }
    catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
}

const forgotPassword = async (req, res) => {

    const { email} = req.body;

    try{
        const generateOtp = Math.floor(Math.random() * 10000);

        // mailtrap transporter
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.AUTH_USER,
              pass: process.env.AUTH_PASS
            }
        });

        const info = await transporter.sendMail({
            from: "jitenkvk@gmail.com", // sender address
            to: email, // list of receivers
            subject: "new opt generated", // Subject line
            html: `<b>Otp is : <i>${generateOtp}</i> </b>`, // html body
        });

        // mail transporter
        let transporter2 = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS
            }
        });

        const info2 = await transporter2.sendMail({
            from: "jitenkvk@gmail.com", // sender address
            to: email, // list of receivers
            subject: "new opt generated", // Subject line
            html: `<b>Otp is : <i>${generateOtp}</i> </b>`, // html body
        });

        if( info.messageId){

            const user = await User.findOneAndUpdate(
                {email},
                {otp: generateOtp},
                {new:true}
            );
            // console.log("new user: " , user);
            
            if( !user){
                return res.status(404).json({
                    message:"user doesnot found",
                });
            }

            return res.status(200).json({
                message:"Opt send successfully",
                // user: user
            });
        }
        else{
            return res.status(200).json({
                message:"Opt failed",
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: err.message,
            msg:"failed to forgot password",
        });
    }
}

const newPassword = async (req, res) => {

    const {otp,password} = req.body;

    try{

        const user = await User.findOne({otp});

        if( !user){
            return res.status(404).json({
                message:"Invalid Otp"
            });
        }

        const securePassword = await bcrypt.hash(password,10);

        const updatedUser = await User.findOneAndUpdate({
            otp
        },{
            password: securePassword,
            otp:0 
        },{
            new:true,
        });

        return res.status(200).json({
            message:"password updated successfully",
        });

    }
    catch(err){
        return res.status(500).json({
            message: err.message,
            msg:"failed to set password",
        });
    }

}


module.exports = {signupContrller, loginController,forgotPassword,newPassword};