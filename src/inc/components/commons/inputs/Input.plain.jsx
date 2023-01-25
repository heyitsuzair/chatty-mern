import React from "react";
import TextError from "../text/Text.error";

const InputPlain = ({
  id,
  name,
  error,
  errorText,
  onChange,
  onBlur,
  type,
  label,
  placeholder,
  value,
}) => {
  /**
   * Props For Input
   */
  const inputProps = {
    type: type ? type : "text",
    onChange: onChange,
    onBlur: onBlur,
    value: value,
    name: name,
    id: id && id,
    placeholder: placeholder,
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:ring-1 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
      />
      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </div>
  );
};

export default InputPlain;
