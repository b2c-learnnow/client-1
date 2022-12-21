import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import Profile from "../assets/images/profile.png";
import { BsCreditCardFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";
import logoimg2 from "../assets/images/logoimg2.jpg";
import IconButton from "../elements/IconButton";

const Primaryicon = styled.div({
  color: Colors.Primary,
  paddingLeft: "10px",
});
const Line = styled.div({
  height: "1px",
  width: "100%",
  backgroundColor: Colors.GreyLight,
});

export default function CartPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <TopNav />
        <Header />
        <SearchBar selectedCategory={"All Categories"} queryParams={""} />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3 my-4">
                <div>
                  <div className="linecard pt-3">
                    <div className="d-flex">
                      <img
                        src={Profile}
                        style={{
                          height: "55px",
                          width: "55px",
                          marginTop: "8px",
                          marginLeft: "5px",
                          borderRadius: "100%",
                        }}
                      />
                      <p className="bold-small mt-3 ms-2">
                        Hello,
                        <p className="bold-medium"> Customer Name</p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="linecard">
                    <div className="d-flex ms-2  ">
                      <Primaryicon>
                        <BsCreditCardFill />
                      </Primaryicon>
                      <p className=" ps-3 bold-medium">MY ORDER</p>
                      <div className="ms-5">
                        <Primaryicon>
                          <IoIosArrowForward className="ms-5"></IoIosArrowForward>
                        </Primaryicon>
                      </div>
                    </div>
                    <Line className="mt-3" />
                    <div className="d-flex pt-3 ps-2">
                      <Primaryicon>
                        <GoPerson />
                      </Primaryicon>
                      <p className=" ps-3 bold-medium">ACCOUNT SETTINGS</p>
                    </div>
                    <div className="ps-5 pt-2">
                      <p className="bold-small">Profile Information</p>
                      <p className=" bold-small pt-1">Manage Addresses</p>
                      <p className="pt-1 bold-small">PAN Card Information</p>
                    </div>
                    <Line className="mt-3" />
                    <div>
                      <div className="d-flex ms-2  pt-3">
                        <Primaryicon>
                          <MdAccountBalanceWallet className="mt-" />
                        </Primaryicon>
                        <p className="bold-medium ps-3">PAYMENTS</p>
                      </div>
                      <div className="ps-5 pt-2">
                        <p className="bold-small">Gift Cards</p>
                        <p className="bold-small pt-1">Saved UPI</p>
                        <p className="bold-small pt-1">Saved Cards</p>
                      </div>
                      <Line className="mt-3" />
                      <div>
                        <div className="d-flex ms-2  pt-3">
                          <Primaryicon>
                            <BsChatLeftTextFill className="mt-1"></BsChatLeftTextFill>
                          </Primaryicon>
                          <p className="bold-medium ps-3">MY CHATS</p>
                          <Primaryicon className="ms-5">
                            <IoIosArrowForward className="ms-5" />
                          </Primaryicon>
                        </div>
                        <Line className="mt-3" />
                        <div>
                          <div className="d-flex ms-2  pt-3">
                            <Primaryicon>
                              <BsPersonSquare />
                            </Primaryicon>
                            <p className="bold-medium ps-3">MY STUFF</p>
                          </div>
                          <div className="ps-5 pt-2">
                            <p className="bold-small">My Coupons</p>
                            <p className="bold-small pt-1">
                              {" "}
                              My Reviews & Ratings
                            </p>
                            <p className="bold-small pt-1">All Notifications</p>
                            <p className="bold-small pt-1">My Wishlist</p>
                          </div>
                        </div>
                        <Line className="mt-3" />
                        <div>
                          <div className="d-flex ms-2  pt-3">
                            <Primaryicon>
                              <ImSwitch />
                            </Primaryicon>
                            <p className="bold-medium ms-3 mb-3">Logout</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="linecard">
                      <div className="ms-3 pt-3">
                        <p className="bold-small"> Frequently Visited: </p>
                        <p className="greysmallfont mb-3">
                          Change Password, Track Order, Help Center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9 my-4">
                <div className="linecard p-4">
                  <div className=" d-flex">
                    <p className="bold-medium">Personal Information</p>
                    <p className="ps-3 mt-1 primary-bold-small">Edit</p>
                  </div>
                  <div className=" pt-3 d-flex">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="greyinput"
                    />
                    <input
                      className="ms-2 greyinput"
                      type="text"
                      placeholder="Last Name"
                    />
                    <IconButton
                      background={Colors.Primary}
                      hover={Colors.PrimaryDark}
                      color="white"
                      className=" py-3"
                      style={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textAlign: "center",
                        height: "30px",
                        width: "80px",
                        marginTop: "2px",
                        marginLeft: "15px",
                      }}
                    >
                      <span className="mx-auto"> SAVE</span>
                    </IconButton>
                  </div>
                  <p className="bold-medium pt-3">Your Gender</p>
                  <div className=" pt-1 d-flex">
                    <input type="radio" />
                    <p className="ps-2 bold-small">Male</p>
                    <input className="ms-5" type="radio" />
                    <p className="ps-2 bold-small">Female</p>
                  </div>
                  <div className=" pt-4 d-flex">
                    <p className="bold-medium">Email Address</p>
                    <p className="ps-3 mt-1 primary-bold-small">Edit</p>
                    <p className="primary-bold-small ps-3 mt-1">
                      {" "}
                      Change Password{" "}
                    </p>
                  </div>
                  <div className=" pt-3 d-flex">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="greyinput"
                    />
                    <IconButton
                      background={Colors.Primary}
                      hover={Colors.PrimaryDark}
                      color="white"
                      className=" py-3"
                      style={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textAlign: "center",
                        height: "30px",
                        width: "80px",
                        marginTop: "2px",
                        marginLeft: "15px",
                      }}
                    >
                      <span className="mx-auto"> SAVE</span>
                    </IconButton>
                  </div>
                  <div className=" pt-4 d-flex">
                    <p className="bold-medium">Mobile Number</p>
                    <p className="ps-3 mt-1 primary-bold-small">Edit</p>
                  </div>
                  <div className=" pt-3 d-flex">
                    <input
                      className="greyinput"
                      type="number"
                      placeholder="  Mobile Number"
                    ></input>
                    <IconButton
                      background={Colors.Primary}
                      hover={Colors.PrimaryDark}
                      color="white"
                      className=" py-3"
                      style={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textAlign: "center",
                        height: "30px",
                        width: "80px",
                        marginTop: "2px",
                        marginLeft: "15px",
                      }}
                    >
                      <span className="mx-auto"> SAVE</span>
                    </IconButton>
                  </div>
                  <div className=" pt-4 d-flex">
                    <p className="bold-medium">FAQs</p>
                  </div>
                  <div className=" pt-3">
                    <p className="bold-small">
                      What happens when I update my email address (or mobile
                      number)?
                    </p>
                    <p className="pt-1 x-small-color ">
                      Your login email id (or mobile number) changes, likewise.
                      You'll receive all your account related communication on
                      your updated email address (or mobile number).
                    </p>
                  </div>
                  <div className=" pt-3">
                    <p className="bold-small">
                      When will my account be updated with the new email address
                      (or mobile number)?
                    </p>
                    <p className="pt-1 x-small-color ">
                      It happens as soon as you confirm the verification code
                      sent to your email (or mobile) and save the changes.
                    </p>
                  </div>
                  <div className=" pt-3">
                    <p className="bold-small">
                      {" "}
                      What happens to my existing account when I update my email
                      address (or mobile number)?
                    </p>
                    <p className="pt-1 x-small-color ">
                      Updating your email address (or mobile number) doesn't
                      invalidate your account. Your account remains fully
                      functional. You'll continue seeing your Order history,
                      saved information and personal details.
                    </p>
                  </div>
                  <div className=" pt-3">
                    <p className="bold-small">
                      Does my Seller account get affected when I update my email
                      address?{" "}
                    </p>
                    <p className="pt-1 x-small-color ">
                      has a 'single sign-on' policy. Any changes will reflect in
                      your Seller account also.
                    </p>
                  </div>
                  <div className=" pt-2">
                    <p className="primary-bold-small">Deactivate Account</p>
                  </div>
                  <div>
                    <div>
                      <img
                        src={logoimg2}
                        style={{
                          height: "180px",
                          width: "100%",
                          marginTop: "30px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
