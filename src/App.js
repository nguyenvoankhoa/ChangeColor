import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import "./style.css";
import ChangeBackgroundColor from "./ChangeBackgroundColor";
import { useSelector } from "react-redux";
const App = () => {
  const textColor = useSelector((state) => state.textColor);

  return (
    <>
      <div className="d-flex">
        <div className="col-8" style={{ color: textColor }}>
          <Header />
          <Banner />
          <Footer />
        </div>
        <div className="col-2">
          <ChangeBackgroundColor />
        </div>
      </div>
    </>
  );
};

export default App;
