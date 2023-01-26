import React from "react";
import TextError from "../text/Text.error";

const InputIconned = ({ classes, inputProps, error, errorText, icon }) => {
  return (
    <div>
      <div
        className={`flex items-center gap-4 bg-indigo-300 dark:bg-gray-700 justify-between ${
          classes ? classes : ""
        }`}
      >
        <input
          {...inputProps}
          className="bg-inherit w-full placeholder:text-black placeholder:dark:text-white outline-0 rounded-xl pl-4 text-black dark:text-white"
        />
        <button type="submit">
          <i
            className={`${icon} bg-indigo-600 text-white w-[15vw] h-[6vh] md:h-[7vh] lg:w-[5vw] lg:h-[10vh] rounded-lg flex items-center justify-center text-xl`}
          ></i>
        </button>
      </div>
      {error && <TextError text={errorText} />}
    </div>
  );
};

export default InputIconned;
