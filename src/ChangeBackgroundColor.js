import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./redux/store";
const ChangeBackgroundColor = () => {
  const dispatch = useDispatch();
  const onFocus = useSelector((state) => state.onFocus);
  const changeColorHandler = (color) => {
    if (onFocus === "header") {
      dispatch(changeColor.changeHeaderColor(color));
    } else if (onFocus === "banner") {
      dispatch(changeColor.changeBannerColor(color));
    } else if (onFocus === "footer") {
      dispatch(changeColor.changeFooterColor(color));
    }
  };
  const changeTextColorHandler = (color) => {
    dispatch(changeColor.changeTextColor(color));
  };
  const [color, setColor] = useState("#000000");
  const [shown, setShown] = useState(false);

  const handleColorChange = (event) => {
    setColor(event.target.value);
    if (onFocus === "header") {
      dispatch(changeColor.changeHeaderColor(event.target.value));
    } else if (onFocus === "banner") {
      dispatch(changeColor.changeBannerColor(event.target.value));
    } else if (onFocus === "footer") {
      dispatch(changeColor.changeFooterColor(event.target.value));
    }
  };
  const showHandler = () => {
    setShown(!shown);
  };

  return (
    <>
      <div className="option">
        <div>
          <ul>
            <li
              onClick={() => changeColorHandler("rgb(255, 255, 255)")}
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            ></li>
            <li
              onClick={() => changeColorHandler("rgb(74, 145, 131)")}
              style={{ backgroundColor: "rgb(74, 145, 131)" }}
            ></li>
            <li
              onClick={() => changeColorHandler("rgb(220, 227, 245)")}
              style={{ backgroundColor: "rgb(220, 227, 245)" }}
            ></li>
            <li
              onClick={() => changeColorHandler("rgb(225, 193, 188)")}
              style={{ backgroundColor: "rgb(225, 193, 188)" }}
            ></li>
            <li
              onClick={() => changeColorHandler("rgb(244, 235, 215)")}
              style={{ backgroundColor: "rgb(244, 235, 215)" }}
            ></li>
          </ul>
          <a onClick={showHandler}>Edit +</a>
          {shown && (
            <div>
              <input type="color" value={color} onChange={handleColorChange} />
            </div>
          )}
        </div>
        <h3>Choose text color</h3>
        <ul>
          <li
            onClick={() => changeTextColorHandler("rgb(255, 255, 255)")}
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          ></li>
          <li
            onClick={() => changeTextColorHandler("rgb(0, 0, 0)")}
            style={{ backgroundColor: "rgb(0, 0, 0)" }}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default ChangeBackgroundColor;
