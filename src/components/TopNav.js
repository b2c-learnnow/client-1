import React, { useEffect, useState } from "react";
import { Colors } from "../config/Colors";
import IconButton from "../elements/IconButton";
import { AiFillSetting, AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Font } from "../config/Font";
import { BsFillBagCheckFill } from "react-icons/bs";
import { contactInfo } from "../services/homePage";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Login from "../components/login"
const TopNav = () => {
  const [state, setState] = useState({
    mobile: 9999900000,
    email: "wwww.xxxxx@gmail.com",
  });

  const fetchData = async () => {
    const { data, status } = await contactInfo();
    setState(data);
    console.log("Basic Info", data, status);
  };

  console.log("Test1", 3);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Test1", 1);

  const phoneNumber = 7644015588;
  const email = "praispranav@gmail.com";
  return (
    <div
      className="w-100 py-2"
      style={{
        backgroundColor: Colors.PrimaryDark,
        color: "white",
        fontSize: Font.ExtraSmall,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <p class="mx-2">
            <AiFillPhone className="mx-2" />
            {state.mobile}
          </p>
          /
          <p>
            <HiOutlineMail className="mx-2" />
            {state.email}
          </p>
        </div>
        <div class="d-flex align-items-center">
          <Link to={"/myprofile"}>
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
          >
            <AiFillSetting className="me-2" /> Settings
          </IconButton>{" "}
          </Link>
          /
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
          >
            <BsFillBagCheckFill className="me-2" /> Orders
          </IconButton>
          /
         
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
            data-toggle="modal" data-target="#exampleModal"
          >
            <MdLogout className="me-2" /> Logout
          </IconButton>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
