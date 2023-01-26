import React from "react";

const ToggleOffCanvas = () => {
  return (
    <div className="lg:hidden">
      <i
        className="fa-solid fa-bars text-xl lg:text-2xl shadow-indigo-500 text-black dark:text-white fixed top-2 right-3 lg:right-auto lg:left-3 shadow-2xl cursor-pointer dark:bg-gray-800 w-11 h-11 lg:w-14 lg:h-14 items-center justify-center flex rounded-full"
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default ToggleOffCanvas;
