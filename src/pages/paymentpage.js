import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import IconButton from "../elements/IconButton";
import { Colors } from "../config/Colors";
import { Link } from "react-router-dom";
const CartItem = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ProductName:
      " HP Athlon Dual Core 3050U - (8 GB/256 GB SSD/Windows 11 Home) 14s-fq0568AU Thin and Light Laptop",
    desc: " The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance.",
    Price: "$500",
    Offer: "      27% Off offers applied",
    OfferPrice: "Or Pay $500 + $1",
    Delivery: "Delivery by Thu Nov 26 | $5",
    Policy: "     7 Days Replacement Policy",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ProductName:
      " HP Athlon Dual Core 3050U - (8 GB/256 GB SSD/Windows 11 Home) 14s-fq0568AU Thin and Light Laptop",
    desc: " The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance.",
    Price: "$500",
    Offer: "      27% Off offers applied",
    OfferPrice: "Or Pay $500 + $1",
    Delivery: "Delivery by Thu Nov 26 | $5",
    Policy: "     7 Days Replacement Policy",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ProductName:
      " HP Athlon Dual Core 3050U - (8 GB/256 GB SSD/Windows 11 Home) 14s-fq0568AU Thin and Light Laptop",
    desc: " The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance.",
    Price: "$500",
    Offer: "      27% Off offers applied",
    OfferPrice: "Or Pay $500 + $1",
    Delivery: "Delivery by Thu Nov 26 | $5",
    Policy: "     7 Days Replacement Policy",
  },
];

export default function Cart() {
  return (
    <div>
      <div className="w-100 h-100 m-0 p-0">
        <div>
          <TopNav />
          <Header />
          <SearchBar selectedCategory={"All Categories"} queryParams={""} />
          <div>
            <div className="container">
              <div className="row">
                <div className="col-7 mt-3  " style={{ marginBottom: "50px" }}>
                  <div className="linecard">
                    <div>
                      <div className="container p-3">
                        <div className="d-flex">
                          <div className="d-flex ">
                            <p className="primarysmfont">1</p>
                            <div className="logintext ps-2">
                              <p className="bold-small"> LOGIN </p>
                              <p className="greysmallfont">
                                Flipkart Customer +999xxxxxxx
                              </p>
                            </div>
                          </div>
                          <div>
                            <Link to={"/myprofile"}>
                              <IconButton
                                background={Colors.Primary}
                                hover={Colors.PrimaryDark}
                                color="white"
                                className=" py-3 ms-2"
                                style={{
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  textAlign: "center",
                                  height: "30px",
                                  width: "80px",
                                }}
                              >
                                <span className="mx-auto"> CHANGE</span>
                              </IconButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="linecard">
                    <div>
                      <div className="container p-3">
                        <div className="d-flex">
                          <div className="d-flex ">
                            <p className="primarysmfont">2</p>
                            <div className="logintext ps-2">
                              <p className="bold-small"> DELIVERY ADDRESS </p>
                              <p className="greysmallfont">
                                Arizona, California, United States
                              </p>
                            </div>
                          </div>
                          <div>
                            <Link to={"/address"}>
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
                                  marginTop: "5px",
                                }}
                              >
                                <span className="mx-auto"> CHANGE</span>
                              </IconButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="linecard">
                    <div>
                      <div className="container p-3">
                        <div className="d-flex">
                          <div className="d-flex ">
                            <p className="primarysmfont">3</p>
                            <div className="logintext ps-2">
                              <p className="bold-small"> ORDER SUMMARY </p>
                              <p className="greysmallfont">3 Items</p>
                            </div>
                          </div>
                          <div>
                            <Link to={"/address"}>
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
                                  marginTop: "5px",
                                  marginLeft: "83px",
                                }}
                              >
                                <span className="mx-auto"> CHECK</span>
                              </IconButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="linecard">
                    <div>
                      <div className="container p-3">
                        <div className="d-flex">
                          <div className="d-flex ">
                            <p className="primarysmfont">4</p>
                            <div className="logintext ps-2">
                              <p className="bold-small"> PAYMENT OPTION </p>
                              <div className="d-flex pt-3 ">
                                <input type="radio"></input>
                                <p className="bold-small ps-2">UPI</p>
                              </div>
                              <div className="d-flex pt-3 ">
                                <input type="radio"></input>
                                <p className="bold-small ps-2">Wallet</p>
                              </div>
                              <div className="d-flex pt-3 ">
                                <input type="radio"></input>
                                <p className="bold-small ps-2">
                                  Credit / Debit / ATM Card
                                </p>
                              </div>
                              <div className="d-flex pt-3 ">
                                <input type="radio"></input>
                                <p className="bold-small ps-2">
                                  Cash On Delivery
                                </p>
                              </div>
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
                                  width: "180px",
                                  marginLeft: "500px",
                                }}
                              >
                                <span className="mx-auto">
                                  SAVE AND DELIVER HERE
                                </span>
                              </IconButton>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
<div className="linecard">
<div className="d-flex p-3 container">
                    <input type="radio"></input>
                    <p className="bold-small ps-2">WALLET</p>
                  </div>
</div> */}
                </div>
                <div className="col-2 "></div>
                <div className="col-3  ">
                  <div
                    className="container mt-4 "
                    style={{
                      position: "sticky",
                      top: "100px",
                    }}
                  >
                    <p className="bold-medium ">PRICE DETAILS</p>
                    <div className="d-flex justify-content-between mt-3">
                      <p className="bold-small">Price ( 5 items )</p>
                      <p className="bold-small">$2500</p>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="bold-small">Discount</p>
                      <p className="bold-small">- $200</p>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="bold-small">Delivery Charges</p>
                      <p className="bold-small">$100</p>
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        height: "1px",
                        width: "100%",
                        backgroundColor: "#cbcdcb",
                      }}
                    />
                    <div className="d-flex justify-content-between mt-2">
                      <p className="bold-medium ">Total Amount</p>
                      <p className="bold-medium ">$2400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
