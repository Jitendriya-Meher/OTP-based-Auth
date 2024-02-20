const express = require('express');
const { signupContrller, loginController, forgotPassword, newPassword } = require('../controllers/auth-controller');
const router = express.Router();

router.post("/signup",signupContrller);
router.post("/login",loginController);
router.post("/forgot",forgotPassword);
router.post("/verify",newPassword);

module.exports = router;