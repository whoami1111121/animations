import { motion } from "motion/react";
const TaskBase = () => {
  return (
    <div>
      <motion.div
        className="p-8"
        initial={{ scale: 0 }}
        animate={{ x: 360, transition: { duration: 2 }, scale: 1 }}
      >
        <h1>Task Base js</h1>
      </motion.div>
    </div>
  );
};

export default TaskBase;
