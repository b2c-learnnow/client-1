import React from "react";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import styled from "styled-components";
import IconButton from "../elements/IconButton";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Logo = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: white;
`;

const buttonConfig = {
  className: "mx-2 px-3 py-2",
  style: { fontWeight: "500" },
  upperCase: "uppercase",
  fontSize: Font.Medium,
  hover: Colors.PrimaryDark,
  background: Colors.Primary,
};

export default function Header() {
  return (
    <div
      id="navbar"
      className="py-3 sticky-top navbar navbar-expand-lg"
      style={{
        backgroundColor: Colors.Primary,
        color: "white",
        fontSize: Font.Medium,
      }}
    >
      <div className="container ">
        <a class="navbar-brand">
          <Logo fontSize={"25px"} className="mx-3 my-0 p-0">
            LOGO
          </Logo>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="navbar-nav ml-3 ms-5 ps-5">
            <Link to="/">
              <IconButton className="nav-item" {...buttonConfig}>
                Home
              </IconButton>
            </Link>
            <IconButton className="nav-item" {...buttonConfig}>
              New Product
            </IconButton>
            <IconButton className="nav-item" {...buttonConfig}>
              Best Sales
            </IconButton>
            <IconButton className="nav-item" {...buttonConfig}>
              Price Drop
            </IconButton>
            <IconButton className="nav-item" {...buttonConfig}>
              Contact Us
            </IconButton>
          </div>
          <div className="mx-3 ms-5 ps-5  d-flex align-items-center">
            <Link>
              <IconButton
                className="nav-item"
                {...buttonConfig}
                style={{ fontSize: "25px" }}
              >
                <AiOutlineHeart />
              </IconButton>
            </Link>
            <Link to={"/cart"}>
              <IconButton
                className="nav-item"
                {...buttonConfig}
                style={{ fontSize: "25px" }}
              >
                <BsBagCheck />
              </IconButton>
            </Link>
            <p style={{ fontWeight: "600" }}>₹ 0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
