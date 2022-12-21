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
const InputNumber = styled.input({
  padding: "8px 10px 10px 0",
  width: "300px",
  fontSize: " 12px    ",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",
  outline: "none",
});
const Loginuebtn = styled.button({
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "305px",
  height: "40px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
});
const Otpbtn = styled.button({
  border: "none",
  lineHeight: "180%",
  textAlign: "center",
  color: Colors.Primary,
  backgroundColor: Colors.White,
  marginTop: "16px",
  boxShadow: "0 4px 6px 0 rgb(0 0 0 / 12%)",
  width: "300px",
  height: "40px",
  fontSize: Font.Normal,
  fontWeight: "500",
});

export default function addressPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <div>
          <div className="logincard">
            <div className="loginbluecard">
              <div className="pt-4 ps-3">
                <p className="medium "> Login </p>
                <p className="bold-small pt-1">
                  Get access to your Orders, Wishlist and Recommendations
                </p>
                <div>
                  <img
                    src={LoginImage}
                    style={{
                      height: "180px",
                      width: "170px",
                      marginTop: "200px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="loginwhitecard">
              <div className="container">
                <div className="d-flex justify-content-end mt-3">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <Logo fontSize={"25px"} className="">
                  LOGO
                </Logo>
              </div>
              <div className="">
                <div className="container">
                  <InputNumber
                    type="text"
                    placeholder="Enter Email/Mobile Number"
                    className=""
                  ></InputNumber>
                  <div className=" pt-3">
                    <InputNumber
                      type="password"
                      placeholder="Enter Password"
                      className=""
                    ></InputNumber>
                    <div className=" d-flex pt-3">
                      <div className="">
                        <div className="greysmallfont">
                          By continuing, you agree to company
                        </div>
                      </div>
                      <div className="primarysmallfont ps-1">Terms of Use</div>
                    </div>
                    <div className="d-flex">
                      <div className="greysmallfont">and</div>

                      <div className="primarysmallfont ps-1">
                        Privacy Policy
                      </div>
                    </div>
                    <div className="pt-4">
                      <Link to={"/"}>
                        <Loginuebtn type="submit">Login</Loginuebtn>
                      </Link>
                    </div>
                    <div className="pt-3">
                      <p className="greycenterfont">Or</p>
                    </div>
                    <Link to={"/otppage"}>
                      <Otpbtn type="submit">Request OTP</Otpbtn>
                    </Link>
                    <div>
                      <div className="pt-4">
                        <Link to={"/signuppage"}>
                          <p className="primarymediumfont">
                            New to Flipkart? Create an account
                          </p>
                        </Link>
                      </div>
                    </div>
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
