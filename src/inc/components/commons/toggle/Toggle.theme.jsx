import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [mode, setMode] = useState(null);

  /**
   * @function onToggle
   *
   * Triggers Toggler
   *
   * Change The Body Class (Oppose The State)
   */
  const onToggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";

    document.body.classList.remove(mode);
    setMode(newMode);
    document.body.classList.add(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      document.body.classList.add(storedMode);
      setMode(storedMode);
    } else {
      localStorage.setItem("mode", "dark");
      document.body.classList.add("dark");
      setMode("dark");
    }
  }, []);

  return (
    <div onClick={() => onToggle()}>
      {mode === "dark" ? (
        <i
          className="fa fa-sun text-2xl shadow-indigo-500 text-white fixed top-2 left-3 lg:left-auto lg:right-3 shadow-2xl cursor-pointer bg-gray-800 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center flex rounded-full"
          aria-hidden="true"
        ></i>
      ) : (
        <i
          className="fa fa-moon text-2xl shadow-indigo-500 text-gray-900 fixed top-2 left-3 lg:left-auto lg:right-3 shadow-2xl cursor-pointer bg-white w-12 h-12 lg:w-14 lg:h-14 items-center justify-center flex rounded-full"
          aria-hidden="true"
        ></i>
      )}
    </div>
  );
};

export default ToggleTheme;
