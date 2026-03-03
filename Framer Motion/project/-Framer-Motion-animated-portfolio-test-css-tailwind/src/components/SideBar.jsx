import React, { useState } from "react";
import NavLinks from "./NavLinks";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="h-screen  flex flex-col items-center justify-center color-black   "
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed   w-100      bg-red-900  bottom-0    top-0 left-0   "
        variants={variants}
      >
        <NavLinks />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
