import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const ReactToastifyContainer = () => {
  return (
    <ToastContainer
      autoClose={2000}
      position="top-center"
      pauseOnHover={true}
      draggable={true}
      toastClassName="poppins-i sm:!w-[25rem] sm:mx-auto sm:right-11 !font-medium bg-white dark:bg-gray-800 !text-black dark:!text-white text-md"
    />
  );
};

export default ReactToastifyContainer;
