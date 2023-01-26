import React from "react";

const ToggleOffCanvas = () => {
  return (
    <div>
      <i
        className="fa-solid fa-bars text-2xl shadow-indigo-500 text-black dark:text-white fixed top-2 right-3 lg:right-auto lg:left-3 shadow-2xl cursor-pointer dark:bg-gray-800 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center flex rounded-full"
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default ToggleOffCanvas;
