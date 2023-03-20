import React from "react";
import "./header.css";
// import heroImage from "../images/";
import CardIcon from "../svg/CardIcon";
import SearchIcon from "../svg/SearchIcon";

function Header() {
  return (
    <section id="headers">
      <div className="header">
        <div className="desk">
          <h1>UI.desk</h1>
        </div>
        <div className="logo">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Testimonials</a>
        </div>
        <div className="icon">
          <SearchIcon />
          <CardIcon />
          <button>Order Now</button>
          {/* <img src={heroImage} alt="" /> */}
        </div>
      </div>
    </section>
  );
}

export default Header;
