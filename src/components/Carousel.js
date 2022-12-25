import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "../elements/IconButton";
import { BsBagCheckFill } from "react-icons/bs";
import { getCarousel } from "../services/homePage";

const BubbleContainer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Bubble = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 0 5px;
  border: 2px solid ${Colors.Primary};
  background: ${(props) => (props.active ? Colors.Primary : "white")};
  transition: 0.4s;
  &:hover {
    background: ${Colors.PrimaryLight};
    transition: 0.4s;
  }
`;

const Image = styled.img`
  transition: 0.4s;
`;

const autoplay = true;
const interval = 2000;

export default function Carousel(props) {
  const [data, setData] = useState(props.data || []);

  const [isreverse, setIsreverse] = useState();

  console.log("Reverse class name");
  // const fetchCaueselData = async () =>{
  //   const { data, status } = await getCarousel();
  //   console.log("Carusel Info", data)
  //   setData(data);
  // }

  // useEffect(()=>{
  //   fetchCaueselData();
  // },[])

  const [activeIndex, setActiveIndex] = useState(0);

  const refreshImage = (item) => {
    return item;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Function Called");
      const dataLength = data.length;
      if (dataLength - 1 > activeIndex) {
        setActiveIndex((prevState) => prevState + 1);
      } else {
        setActiveIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className="w-100"
      style={{
        height: "700px",
        backgroundColor: "rgb(240,240,240)",
        position: "relative",
        paddingTop: "60px",
      }}
    >
      <div className="row">
        <div className="col-xxl-5 col-xl-6 col-lg-10 ">
          <div className=" px-4 ">
            <AnimatePresence>
              {data.map((item, index) => (
                <>
                  {index === activeIndex && (
                    <>
                      <motion.h1
                        initial={{ y: -20, x: 10 }}
                        animate={{ y: 0, x: 0 }}
                      >
                        {data[activeIndex].headerText}
                      </motion.h1>
                      <motion.h1
                        className="my-2"
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                      >
                        {data[activeIndex].headerText2}
                      </motion.h1>
                      <motion.p initial={{ x: 20 }} animate={{ x: 0 }}>
                        {data[activeIndex].description}
                      </motion.p>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <IconButton
                          background={"black"}
                          className="my-3 px-4 py-2 align-items-center hidden-mobile"
                          style={{ borderRadius: "30px", fontWeight: "500" }}
                          hover={Colors.PrimaryLight}
                        >
                          <BsBagCheckFill className="me-2" /> Shop Now
                        </IconButton>
                      </motion.div>
                    </>
                  )}
                </>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-6">
          <div
            className="container d-flex  h-100 justify-content-center"
            style={{ overflow: "hidden" }}
          >
            <div
              className={`d-flex align-items-center ${
                props.reversed ? "row-reverse" : ""
              }  justify-content-between`}
            >
              {data.map((item, index) => (
                <>
                  {/* <AnimatePresence> */}
                  {index === activeIndex && (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{ opacity: 0 }}
                      src={data[activeIndex].image}
                      alt="None"
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        height: "400px",
                      }}
                    />
                  )}
                  {/* </AnimatePresence> */}
                </>
              ))}
            </div>
            {/* <img src={data} /> */}
          </div>
        </div>
      </div>

      <BubbleContainer>
        {data.map((item, index) => (
          <Bubble
            onClick={() => setActiveIndex(index)}
            active={index === activeIndex}
          ></Bubble>
        ))}
      </BubbleContainer>
    </div>
  );
}
