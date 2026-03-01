import { motion } from "motion/react";
const TaskBase = () => {
  return (
    <section className="px-22 bg-black w-screen min-h-screen">
      <motion.div className="p-8">
        <h1>Task Base js</h1>
      </motion.div>
      <br />
      <br />
      <br />
      <motion.div
        initial={{ scale: 5 }}
        animate={{
          x: 900,
          scale: 2,
          transition: { duration: 2 },
        }}
        className="w-8 h-8 bg-amber-600"
      ></motion.div>
      <br />
      <br />
      <br />
      <motion.div
        whileHover={{ scale: 4 }}
        whileTap={{ scale: 0.5 }}
        onHoverStart={() => console.log("hover started!")}
        className="w-28 h-28 bg-amber-600"
      ></motion.div>

      <motion.div
        animate={{
          transition: { duration: 2 },
        }}
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1, rotate:180 }}
      />
    </section>
  );
};

export default TaskBase;
