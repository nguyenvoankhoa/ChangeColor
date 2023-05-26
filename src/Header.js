import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./redux/store";
const Header = () => {
  const headerColor = useSelector((state) => state.headerColor);
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const handleFocus = () => {
    setIsFocused(true);
    dispatch(changeColor.changeFocus("header"));
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      ref={divRef}
      className={isFocused ? "header focused" : "header"}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      style={{ backgroundColor: headerColor }}
    >
      Header
    </div>
  );
};

export default Header;
