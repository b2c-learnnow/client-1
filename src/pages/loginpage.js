import React from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import LoginImage from "../assets/images/loginimg.jpg";
import { Link } from "react-router-dom";



const InputNumber = styled.input({
  padding: "8px 10px 10px 0",
  width: "350px",
  fontSize: " 12px    ",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",
  marginLeft: "14px",
  outline: "none",
});

const Continuebtn = styled.button({
  backgroundColor: Colors.Orange,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "350px",
  height: "48px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
  marginLeft: "14px",
});

const Existinguserbtn = styled.button({
  border: "none",
  lineHeight: "180%",
  textAlign: "center",
  color: Colors.Primary,
  backgroundColor: Colors.White,
  marginTop: "16px",
  boxShadow: "0 4px 6px 0 rgb(0 0 0 / 12%)",
  width: "350px",
  height: "48px",
  fontSize: Font.Normal,
  fontWeight: "500",
  marginLeft: "14px",
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
                        height: "200px",
                        width: "200px",
                        marginTop: "180px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="loginwhitecard">
                <div className="pt-5">
                  <div className="container pt-4">
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
                      <div className=" d-flex pt-4">
                        <div className="ps-3">
                          <div className="greysmallfont">
                            By continuing, you agree to Flipkart's
                          </div>
                        </div>
                        <div className="primarysmallfont ps-1">
                          Terms of Use
                        </div>
                        <div className="greysmallfont ps-1">and</div>
                      </div>

                      <div className="primarysmallfont ps-3">
                        Privacy Policy
                      </div>

                      <div className="pt-4">
                        <Link to={"/"}>
                          <Continuebtn type="submit">Login</Continuebtn>
                        </Link>
                      </div>
                      <div className="pt-4">
                        <p className="greycenterfont">Or</p>
                      </div>
                      <Link to={"/otppage"}>
                        <Existinguserbtn type="submit">
                          Request OTP
                        </Existinguserbtn>
                      </Link>
                      <div>
                        <div className="pt-5">
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
