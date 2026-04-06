import { motion } from "motion/react";
const TaskBase = () => {
  return (
    <div>
      <motion.div className="p-8" animate={{ x: 360 }}>
        <h1>Task Base js</h1>
      </motion.div>
    </div>
  );
};

export default TaskBase;
