import React from "react";

const PlainButton = ({
  text,
  icon,
  onClick,
  size,
  buttonColor,
  textColor,
  shadow,
  isDisabled,
  isSquare,
}) => {
  let buttonSize = `h-12 w-${isSquare ? "12" : "48"}`;
  let buttonBorderRadius = "rounded-lg";
  let buttonShadow = "";

  /**
   * Check What Size We Got As Prop And Than Set Size And Border Radius Accordingly
   */
  if (size && size === "large") {
    buttonSize = "h-14 w-52 md:h-16 md:w-64";
    buttonBorderRadius = "rounded-xl";
  } else if (size && size === "small") {
    buttonSize = "h-8 w-32";
    buttonBorderRadius = "rounded-md";
  }

  /**
   * Check Whether the button color is provided or not
   */
  if (!buttonColor) {
    buttonColor = "bg-indigo-600 hover:bg-indigo-700";
  }
  /**
   * Check Whether the text color is provided or not
   */
  if (!textColor) {
    textColor = "text-white";
  }

  /**
   * Check Whether the shadow is provided or not
   */
  if (shadow) {
    buttonShadow = "shadow-2xl";
  }

  return (
    <>
      <div className="hidden w-12"></div>
      <button
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        className={`b ${buttonSize} ${buttonColor} ${textColor} transition-all duration-300 flex justify-center items-center ${buttonBorderRadius} ${buttonShadow} disabled:opacity-60`}
      >
        <span className={`text-center font-semibold`}>
          {text}

          {icon && (
            <>
              &nbsp; <i className={`fa ${icon}`} aria-hidden="true"></i>
            </>
          )}
        </span>
      </button>
    </>
  );
};

export default PlainButton;
