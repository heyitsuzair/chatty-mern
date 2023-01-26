import React, { useState } from "react";
import { ContactItem, Text4Xl } from "../index";

const ToggleOffCanvas = () => {
  /**
   * Is Canvas Open
   */
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden z-[1]">
        <i
          onClick={() => setIsCanvasOpen(!isCanvasOpen)}
          className="fa-solid fa-bars text-xl lg:text-2xl shadow-indigo-500 text-black dark:text-white fixed top-2 right-3 lg:right-auto lg:left-3 shadow-2xl cursor-pointer dark:bg-gray-800 w-11 h-11 lg:w-14 lg:h-14 items-center justify-center flex rounded-full"
          aria-hidden="true"
        ></i>
      </div>
      <div
        className={`${
          isCanvasOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out transition-all duration-500 off-canvas w-full fixed overflow-y-scroll right-0 bg-white dark:bg-gray-800 h-screen z-[2]`}
      >
        <div className="flex my-5 mx-2 border-b border-indigo-500 pb-4 items-center justify-between">
          <Text4Xl text="Chatty" classes="!text-black dark:!text-white" />
          <i
            onClick={() => setIsCanvasOpen(!isCanvasOpen)}
            className="fa-solid fa-xmark text-xl lg:text-2xl shadow-indigo-500 text-black dark:text-white shadow-2xl cursor-pointer dark:bg-gray-800 w-11 h-11 lg:w-14 lg:h-14 items-center justify-center flex rounded-full"
            aria-hidden="true"
          ></i>
        </div>
        <div className="contacts flex flex-col gap-4 mx-2">
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </div>
      </div>
    </>
  );
};

export default ToggleOffCanvas;
