import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./redux/store";

const Footer = () => {
  const footerColor = useSelector((state) => state.footerColor);
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const handleFocus = () => {
    setIsFocused(true);
    dispatch(changeColor.changeFocus("footer"));
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      ref={divRef}
      className={isFocused ? "footer focused" : "footer"}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      style={{ backgroundColor: footerColor }}
    >
      Footer
    </div>
  );
};

export default Footer;
