import { motion } from "framer-motion";
import "./toggleButton.scss";

const ToggleButton = ({ setOpen }) => {
  return (
    <>
      <button onClick={() => setOpen((p) => !p)}>
        {/* <svg width="23" height="23" viewBox="0 0 23 23">
          <path stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg> */}

        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu">
          <path 
            d='M 3 16.5 L 20 2.5'
          />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg> */}

        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu">
          <motion.path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <motion.path d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
    </>
  );
};

export default ToggleButton;
