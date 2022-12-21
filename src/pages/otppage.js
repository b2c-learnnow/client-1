import React from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import LoginImage from "../assets/images/loginimg.jpg";
import { Link } from "react-router-dom";

const Logo = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: #3949ab;
`;
const Otpinput = styled.div({
  marginTop: "70px",
  marginLeft: "110px",
});
const Verifybtn = styled.button({
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "320px",
  height: "40px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
  marginLeft: "40px",
});

export default function addressPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <div>
          <div className="logincard">
            <div className="loginbluecard">
              <p className="pt-4 ps-3 medium"> Login </p>
              <p className="pt-2 ps-3 bold-small">
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <div>
                <img
                  src={LoginImage}
                  style={{
                    height: "200px",
                    width: "200px",
                    marginTop: "180px",
                    marginLeft: "15px",
                  }}
                />
              </div>
            </div>
            <div className="loginwhitecard">
              <div className="container">
                <Logo fontSize={"25px"} className="p-3 ">
                  LOGO
                </Logo>
              </div>
              <div className="pt-4 ">
                <p className="normalfont">Please enter the OTP sent to</p>
                <div className="d-flex justify-content-center ">
                  <p className="normalfont">999xxxxxxx.</p>
                  <p className="primarynormalfont">Change</p>
                </div>
                <Otpinput>
                  <div>
                    <div id="otp-holder">
                      <div id="otp-content">
                        <input
                          id="otp-input"
                          type="tel"
                          maxlength="6"
                          pattern="\d{6}"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </Otpinput>
                <div className="pt-4">
                  <Link to={"/"}>
                    <Verifybtn type="submit">Verify</Verifybtn>
                  </Link>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex pt-4 ">
                    <p className="greysmallfont">Not received your code?</p>
                    <p className="primarysmallfont ps-1"> Resend code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
