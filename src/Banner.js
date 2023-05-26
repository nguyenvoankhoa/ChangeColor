import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./redux/store";
const Banner = () => {
  const bannerColor = useSelector((state) => state.bannerColor);
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const handleFocus = () => {
    setIsFocused(true);
    dispatch(changeColor.changeFocus("banner"));
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      ref={divRef}
      className={isFocused ? "banner focused" : "banner"}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      style={{ backgroundColor: bannerColor }}
    >
      Banner
    </div>
  );
};

export default Banner;
