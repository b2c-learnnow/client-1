import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import IconButton from "../elements/IconButton";
import { Colors } from "../config/Colors";
import { BsFillHandbagFill } from "react-icons/bs";
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
    Savebtn: "SAVE FOR LATER",
    Removebtn: "REMOVE",
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
                <div className="col-5 mt-4">
                  <div>
                    <p className="medium">My Cart</p>
                    <div className="d-flex">
                      <p className="x-small">Deliver to </p>
                      <p className="bold-small">: Arizona, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-7 ">
                  {CartItem.map((val, i) => (
                    <div key={i}>
                      <div
                        style={{
                          borderBottom: "1px solid #cbcdcb",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="mt-4 d-flex" style={{ width: "500px" }}>
                          <img
                            src={`${val.imgUrl}`}
                            style={{
                              height: "120px",
                              width: "150px",
                              borderRadius: "3px",
                            }}
                          />
                          <div className="ms-3">
                            <p className="bold-small">{val.ProductName}</p>
                            <p className="x-small-color">{val.desc}</p>
                            <div className="mt-2 d-flex">
                              <p className="bold-small">{val.Price}</p>
                              <p className="green-bold-small ms-2">
                                {val.Offer}
                              </p>
                            </div>
                            <p className="bold-small">{val.OfferPrice}</p>
                            <div className="d-flex mt-2 mb-2">
                              <p className="green-bold-small">{val.Savebtn}</p>
                              <p className="red-bold-small ms-2">
                                {val.Removebtn}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style={{ height: "150px", marginTop: "25px" }}>
                          <p className="bold-small">{val.Delivery}</p>
                          <p className="x-small-color mt-1 " style={{}}>
                            {" "}
                            {val.Policy}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-2 "></div>
                <div className="col-3  ">
                  <div
                    className="container mt-3"
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

            <div
              className="mt-3"
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "",
                marginBottom: "40px",
              }}
            >
              <IconButton
                background={Colors.Primary}
                hover={Colors.PrimaryDark}
                color="white"
                className=" py-3"
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textAlign: "center",
                  height: "35px",
                  width: "180px",
                }}
              >
                <span className="mx-auto">
                  {" "}
                  <BsFillHandbagFill className="me-2 mb-1" />
                  PLACE ORDER
                </span>
              </IconButton>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
