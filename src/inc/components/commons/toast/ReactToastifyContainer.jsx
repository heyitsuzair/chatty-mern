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
      toastClassName="poppins-i !font-medium bg-white dark:bg-gray-900 !text-black dark:!text-white text-md"
    />
  );
};

export default ReactToastifyContainer;
