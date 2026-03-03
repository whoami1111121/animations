import React from "react";

const NavLinks = () => {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];

  return (
    <>
    <div className='absolute w-full h-full flex flex-col justify-center gap-20'>
      {items.map((item, i) => (
        <a href={`#${item}`} key={i} className="text-4xl">
          {item}
        </a>
      ))}
      </div>
    </>
  );
};

export default NavLinks;
