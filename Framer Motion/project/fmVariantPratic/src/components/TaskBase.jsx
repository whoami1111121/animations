import { motion } from "motion/react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  initial2: {
    x: 1500,
    opacity: 0
  },
  initial3: {
    x: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1, staggerChildren: .1
    }
  },
  animate2: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 10, staggerChildren: 1
    }
  },
  animate3: {
    x: 100,
    opacity: 1,
    transition: {
      duration: 3,
      // staggerChildren: 1
    }
  },
}


const TaskBase = () => {
  return (
    <div>
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate='animate' />
      <motion.div className="textContainer" variants={textVariants} initial="initial2" animate='animate2' />

      <motion.div className="" variants={textVariants} initial="initial3" animate='animate3'>
        <motion.div className="textContainer" variants={textVariants}  > </motion.div>
        <motion.div className="textContainer" variants={textVariants}  > </motion.div>
        <motion.div className="textContainer" variants={textVariants}  > </motion.div>
      </motion.div>
    </div>

  )
}

export default TaskBase
