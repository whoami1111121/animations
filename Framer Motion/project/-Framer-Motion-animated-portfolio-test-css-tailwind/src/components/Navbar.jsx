import { motion, scale } from "framer-motion";
import SideBar from "./SideBar";

const Navbar = () => {
  const imgList = [
    "/facebook.png",
    "/instagram.png",
    "/youtube.png",
    "/dribbble.png",
  ];
  const variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { delay: i * 0.7, type: "spring", stiffness: 400 },
    }),
    hidden: {
      scale: 0,
      x: 50,
      y: -50,
      opacity: 0,
    },
  };
  return (
    <div>
      <div className="absolute top-0 left-0">

      <SideBar />
      </div>

      <div className="w-341.5 mx-auto flex items-center justify-between h-24">
        <motion.h1
          initial={{ scale: 0, opacity: 0, y: -200, x: -100 }}
          animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 400,
            // damping: 40,
          }}
        >
          Who Am I
        </motion.h1>
        <motion.div
          className="flex gap-4 items-center"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {imgList.map((item, i) => (
            <motion.a href="#" key={i} variants={variants} custom={i}>
              <img src={item} alt={item} className="w-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
