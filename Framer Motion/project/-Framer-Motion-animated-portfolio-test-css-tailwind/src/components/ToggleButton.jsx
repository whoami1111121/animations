import React from "react";

const ToggleButton = ({ setOpen }) => {
  return (
    <>
      <button
        onClick={() => setOpen((p) => !p)}
        className="  top-10 left-10 w-10 h-10 fixed background-transparent border-none cursor-pointer"
      >
        Click
      </button>
    </>
  );
};

export default ToggleButton;
