import React from "react";

const sizeClasses = {
  txtInterExtraBold2274: "font-extrabold font-inter",
  txtInterBold32: "font-bold font-inter",
  txtSourceSerifProBold7276DeeporangeA700: "font-bold font-sourceserifpro",
  txtArialMT2974: "font-arial font-normal",
  txtInterSemiBold1917: "font-inter font-semibold",
  txtInterMedium3326: "font-inter font-medium",
  txtSourceSerifProBold32: "font-bold font-sourceserifpro",
  txtInterExtraBold36: "font-extrabold font-inter",
  txtSourceSerifProBold7276: "font-bold font-sourceserifpro",
  txtInterSemiBold1824: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterSemiBold1653: "font-inter font-semibold",
  txtInterRegular2038: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
