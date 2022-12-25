import React, { useState, useEffect } from "react";
import { Font } from "../config/Font";
import { Colors } from "../config/Colors";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function SearchBar({ selectedCategory, queryParams }) {
  const [queryState, setQueryState] = useState(queryParams);
  useEffect(() => {
    setQueryState(queryParams);
  }, [queryParams]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        backgroundColor: Colors.Primary,
        color: "white",
        fontSize: Font.Medium,
      }}
    >
      <div className="">
        <div
          className="border-radius d-flex align-items-center bg-white"
          style={{ border: `1px solid ${Colors.PrimaryDark}` }}
        >
          <div
            className="px-3 py-2"
            style={{ backgroundColor: Colors.PrimaryLight }}
          >
            {selectedCategory}
            <AiFillCaretDown
              className="ms-2"
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            ></AiFillCaretDown>
          </div>
          <input
            type="text"
            className="border-0 px-3"
            placeholder="Search"
            value={queryState}
            onChange={(e) => setQueryState(e.target.value)}
            style={{ width: "25rem", outline: "none" }}
          />
          <Link
            to={`/search?product=${queryState}&category=${selectedCategory}`}
            className="mx-2"
            style={{ fontSize: "20px", color: Colors.PrimaryDark }}
          >
            <FiSearch />
          </Link>
        </div>
      </div>
    </div>
  );
}
