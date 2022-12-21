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
  width: "350px",
  fontSize: " 12px    ",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",
  marginLeft: "14px",
  outline: "none",
});

const Continuebtn = styled.button({
  backgroundColor: Colors.Primary,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "350px",
  height: "40px",
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
  height: "40px",
  fontSize: Font.Normal,
  fontWeight: "500",
  marginLeft: "14px",
  marginTop: "40px",
});
export default function addressPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <div>
          <div className="logincard">
            <div className="loginbluecard">
              <p className="pt-4 ps-3 medium"> Looks like you're new here! </p>
              <p className="bold-small pt-2 ps-3">
                Sign up with your mobile number to get started
              </p>
              <div>
                <img
                  src={LoginImage}
                  style={{
                    height: "200px",
                    width: "200px",
                    marginTop: "150px",
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
              <div className="pt-3">
                <div className="container">
                  <InputNumber
                    type="number"
                    placeholder="Enter Mobile Number"
                    className=""
                  ></InputNumber>
                  <div className=" d-flex pt-4">
                    <div className="ps-3">
                      <p className="greysmallfont">
                        By continuing, you agree to Flipkart's
                      </p>
                    </div>
                    <p className="primarysmallfont ps-1">Terms of Use</p>
                    <p className="greysmallfont ps-1">and</p>
                  </div>

                  <p className="primarysmallfont ps-3">Privacy Policy</p>
                  <div className="pt-4">
                    <Link to={"/otppage"}>
                      <Continuebtn type="submit">CONTINUE</Continuebtn>
                    </Link>
                  </div>
                  <Link to={"/loginpage"}>
                    <Existinguserbtn type="submit">
                      Existing User? Log in
                    </Existinguserbtn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
