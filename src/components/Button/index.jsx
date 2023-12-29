import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[17px]" };
const variants = {
  fill: {
    red_A700: "bg-red-A700 text-white-A700",
    deep_orange_A700_1e: "bg-deep_orange-A700_1e text-black-900",
    deep_orange_A700_e0: "bg-deep_orange-A700_e0 text-white-A700",
  },
};
const sizes = { xs: "p-[3px]", sm: "p-[7px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "deep_orange_A700_1e",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_A700",
    "deep_orange_A700_1e",
    "deep_orange_A700_e0",
  ]),
};

export { Button };
