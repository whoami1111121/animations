import React from "react";

const ToggleButton = ({ setOpen }) => {
  return (
    <>
      <button
        onClick={() => setOpen((p) => !p)}
        className="  top-6 left-6 w-13 h-13 fixed background-transparent border-none cursor-pointer"
      >
        X
      </button>
    </>
  );
};

export default ToggleButton;
