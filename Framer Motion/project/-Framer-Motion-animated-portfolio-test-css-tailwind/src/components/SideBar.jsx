import React, { useState } from "react";
import NavLinks from "./NavLinks";
import ToggleButton from "./ToggleButton";
import { motion, scale } from "framer-motion";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      // opacity: 1,

      transition: {
        type: "spring",
        stiffness: 140,
        damping: 240,
      },
      closed: {
        clipPath: "circle(30px at 50px 50px)",
        // opacity: 0,
        transition: {
          type: "spring",
          stiffness: 140,
          damping: 240,
        },
      },
    },
  };
  console.log(open);

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center color-black  overflow-hidden"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="flex flex-col gap-8  w-100  justify-center h-full  bg-amber-400  overflow-hidden absolute top-0 left-0  w-full"
        variants={variants}
      >
        <NavLinks />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
