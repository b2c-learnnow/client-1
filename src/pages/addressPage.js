import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { Colors } from "../config/Colors";
import { Link } from "react-router-dom";
import IconButton from "../elements/IconButton";
import { MdLocationOn } from "react-icons/md";

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
              <div className="col-7 my-4">
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
                              className=" py-3"
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
                <div className="linecard p-3 mt-1">
                  <div className=" d-flex">
                    <p className="primarysmfont ">2</p>
                    <p className="ps-2 bold-small"> DELIVERY ADDRESS</p>
                  </div>
                  <div className="d-flex pt-3 ps-4">
                    <input type="radio"></input>
                    <p className="bold-small ps-2">EDIT ADDRESS</p>
                  </div>
                  <div className="pt-2 ps-4 ms-3">
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
                        width: "200px",
                      }}
                    >
                      <span className="mx-auto">
                        <MdLocationOn className="me-2 mb-1" />
                        Use my current location
                      </span>
                    </IconButton>
                    <div className="pt-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="greyinput"
                      />
                      <input
                        type="number"
                        placeholder="10-digit mobile number"
                        className="greyinput ms-3"
                      />
                    </div>
                    <div className=" pt-3">
                      <input
                        type="number"
                        placeholder="Pincode"
                        className="greyinput"
                      />
                      <input
                        type="text"
                        placeholder="Locality"
                        className="greyinput ms-3"
                      />
                    </div>
                    <div className="pt-3">
                      <textarea
                        type="text"
                        placeholder="Address (Area and Street)"
                        className="greyinput"
                        style={{ width: "518px" }}
                      />
                    </div>
                    <div className=" pt-2">
                      <input
                        type="text"
                        placeholder="City/District/Town"
                        className="greyinput"
                      />
                      <input
                        className="greyinput ms-3"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                    <div className=" pt-3">
                      <input
                        type="text"
                        placeholder="Landmark (Optional)"
                        className="greyinput"
                      />
                      <input
                        type="number"
                        placeholder="Alternate Phone (Optional)"
                        className="greyinput ms-3"
                      />
                    </div>
                    <p className=" pt-3 bold-small">Address Type</p>
                    <div className="d-flex">
                      <div className="d-flex pt-1">
                        <input type="radio"></input>
                        <p className="greysmallfont ps-2">
                          Home (All day delivery)
                        </p>
                      </div>
                      <div className="d-flex pt-1 ps-5">
                        <input type="radio"></input>
                        <p className="ps-2 greysmallfont">
                          Work (Delivery between 10 AM - 5 PM)
                        </p>
                      </div>
                    </div>
                    <div className=" d-flex  mt-2">
                      <Link to={"/ordersummary"}>
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
                          }}
                        >
                          <span className="mx-auto">SAVE AND DELIVER HERE</span>
                        </IconButton>
                      </Link>
                      <Link to={"/cart"}>
                        <IconButton
                          background={Colors.creamy}
                          hover={Colors.GreyLight}
                          color="black  "
                          className=" py-3"
                          style={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            textAlign: "center",
                            height: "30px",
                            width: "100px",
                            marginLeft: "15px",
                          }}
                        >
                          <span className="mx-auto">CANCEL</span>
                        </IconButton>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="linecard mt-1 p-2">
                  <div className=" d-flex">
                    <p className=" primarysmfont mt-1">3</p>
                    <p className="bold-small ms-2 pt-1">ORDER SUMMARY </p>
                  </div>
                </div>
                <div className="linecard mt-1 p-2">
                  <div className=" d-flex">
                    <p className=" primarysmfont mt-1">4</p>
                    <p className="bold-small ms-2 pt-1">PAYMENT OPTIONS</p>
                  </div>
                </div>
              </div>
              <div className="col-2 my-4"></div>
              <div className="col-3  ">
                <div
                  className="container mt-4"
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
  );
}
