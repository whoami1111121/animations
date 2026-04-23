import React from "react";
import "./links.scss";
import { motion } from "framer-motion";

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="links">
      {items.map((item, i) => (
        <motion.a href={`#${item}`} key={item} initial={{ y: 40, opacity: 0, scale: 1.2 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={
            {
              duration: .4,
              delay: i * .2,
              // staggerChildren: .2
            }

          } whileTap={{ scale: .5 }}>
          {item}
        </motion.a>
      ))
      }
    </div >
  );
};

export default Links;
