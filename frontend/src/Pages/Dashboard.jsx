import React from 'react';
import {motion} from "framer-motion";

const fadeInUpAnimation = {
  hidden:{
    opacity: 0,
    y:150
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      staggerChildren:0.3,
      // delay:1,
      duration:1,
    }
  },
}

const Dashboard = () => {
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        variants={fadeInUpAnimation}
        initial="hidden"
        animate="show"

       className="flex justify-center text-center flex-col gap-4">
        <motion.p
        // initial={{opacity: 0, y:-100}}
        // animate={{opacity:0.5, y:0}}

        // transition={{
        //   delay:1,
        //   duration:1
        // }}

        variants={fadeInUpAnimation}

        >MONITOR. ALERT. AI DIAGNOSTICS REPORT.</motion.p>

        <motion.h1 className=" linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl"

        variants={fadeInUpAnimation}
        // initial="hidden"
        // animate="show"
        >
          Get downtime <br />
          AI Diagnostics to help you <br />
          build better apps
        </motion.h1>

        <motion.p

          variants={fadeInUpAnimation}

         className="text-base text-gray-500 md:text-lg">
          Join the mailing list for early access to the alpha release
        </motion.p>

      </motion.div>
    </div>
  )
}

export default Dashboard