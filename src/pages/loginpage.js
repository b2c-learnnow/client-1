import React, { useState } from "react";
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
  width: "100%",
  fontSize: " 14px    ",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",

  outline: "none",
});

const LoginBtn = styled.button({
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "100%",
  height: "40px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
});

const OtpBtn = styled.button({
  border: "none",
  lineHeight: "180%",
  textAlign: "center",
  color: Colors.Primary,
  backgroundColor: Colors.White,
  marginTop: "16px",

  width: "100%",
  height: "40px",
  fontSize: Font.Normal,
  fontWeight: "500",
});

const Img = styled.img({
  width: "100%",
  height: "100%",
});

export default function AddressPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div className="w-100 h-100 m-0 p-0">
      <div className="logincard">
        <div className="row ">
          <div className="col-6">
            <div className="overflow-hidden rounded">
              <Img src={LoginImage} />
            </div>
          </div>
          <div className="col-6">
            <div className=" mt-4 pe-3">
              <div className="d-flex justify-content-between pb-3">
                <Logo fontSize={"25px"} className="">
                  LOGO
                </Logo>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {isNewUser ? 
              <div>
              <div className="mt-4">
                <InputNumber
                  type="text"
                  placeholder="Enter Your Name"
                  className=""
                ></InputNumber>
              </div>
              <div className="mt-4">
                <InputNumber
                  type="text"
                  placeholder="Enter Your Email"
                  className=""
                ></InputNumber>
              </div>
              <div className="mt-4">
                <InputNumber
                  type="password"
                  placeholder="Create Password"
                  className=""
                ></InputNumber>
              </div>
              <div className="mt-4">
                <InputNumber
                  type="password"
                  placeholder="Conform Password"
                  className=""
                ></InputNumber>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="greysmallfont">
                  By continuing, you agree to company
                </div>
                <div className="primarysmallfont ps-1">Terms of Use</div>
              </div>
              <div className="pt-4">
                <Link to={"/"}>
                  <LoginBtn type="submit"
                    onClick={()=>setIsNewUser(false)}
                  >Create Account</LoginBtn>
                </Link>
              </div>
            </div>
               : 
                
                  <div>
                  <div className="mt-4">
                    <InputNumber
                      type="text"
                      placeholder="Enter Email/Mobile Number"
                      className=""
                    ></InputNumber>
                  </div>
                  <div className="mt-3">
                    <InputNumber
                      type="password"
                      placeholder="Enter Password"
                      className=""
                    ></InputNumber>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <div className="greysmallfont">
                      By continuing, you agree to company
                    </div>
                    <div className="primarysmallfont ps-1">Terms of Use</div>
                  </div>
                  <div className="pt-4">
                    <Link to={"/"}>
                      <LoginBtn type="submit"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >Login</LoginBtn>
                    </Link>
                  </div>
                  <div className="pt-3">
                    <p className="greycenterfont">Or</p>
                  </div>
                  <Link to={"/otppage"}>
                    <OtpBtn className="shadow-sm" type="submit">
                      Request OTP
                    </OtpBtn>
                  </Link>
                  <div className="pt-4">
                   
                      <p className="primarymediumfont" 
                      
                      onClick={()=>setIsNewUser(true)}>
                        New to E-com? Create an account
                      </p>
               
                  </div>
                </div>
              }
            </div>

            {/* <div className="container">
                <div className="d-flex justify-content-end mt-3">
                
                </div>
                <Logo fontSize={"25px"} className="">
                  LOGO
                </Logo>
              </div>
              <div className="">
                <div className="container">
                 
                  <div className=" pt-3">
                   
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
       
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
