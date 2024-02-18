import  { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Homecomponents/Nav";

import data from "./Marketcomponents/data";
const Product = () => {
  let { productId } = useParams();
  data.filter((item) => item.id === productId);
  let product = data[0];
  let [mainImg, setMainImg] = useState(product.img);
  let [orderedquantity, setOrderedquantity] = useState(1);
  console.log(window.innerHeight);
  return (
    <>
      <Nav />
      <img
        src="/assets/line2p.png"
        className="absolute z-neg1 w-[64vw] h-[100vh]  top-[0px]"
      />
      <div className="flex  w-[75vw] gap-[80px] mx-auto mt-[143px] max:flex-col ">
        <div className=" w-[33.8vw]  max:w-[80vw]">
          <img src={mainImg} className="w-[100%]   h-[700px] mb-[32px] " />
          <div className="flex w-[100%] justify-between">
            {product.otherImages.map((e) => {
              return (
                <img
                  src={e}
                  className="w-[23%]  min-h-[100px] h-[6.5vw] cursor-pointer"
                  onClick={() => {
                    setMainImg(e);
                  }}
                  key={e}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-[30vw] max:w-[80vw]">
          <h1 className="text-[36px] font-bold text-[#403C39]">
            Organic Brown Rice
          </h1>
          <p className="text-[#949494] w-auto font-medium">
            Enjoy the wholesome goodness of organic brown rice. Its nutty flavor
            and firm texture make it an ideal choice for a healthy and hearty
            meal.
          </p>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            rel="stylesheet"
          />
          <div className="flex  gap-[5px] items-center mb-[20px]">
            <span className="score pr-[7px] text-[18px]">
              <div className="score-wrap">
                <span
                  className="stars-active "
                  style={{ width: ` ${(product.rate * 100) / 5}%` }}
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span className="stars-inactive">
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>
              </div>
            </span>{" "}
            <div className="font-medium text-[12px] text-[#5B5B5B]">
              ({product.ratersNumber})
            </div>
          </div>
          <img src="/assets/linep.png" className="w-[80%]" />
          <div className="my-[30px]">
            <p className="text-[#5B5B5B] text-[36px] font-bold">
              {product.price} DA/{product.unity}{" "}
            </p>
            <p className="text-[14px] font-medium text-[#949494]">
              price is negotiable to a reasonable extent.
            </p>
          </div>
          <img src="/assets/linep.png" className="w-[80%]" />
          <div className="grid grid-cols-2 grid-rows-2 gap-y-[10px] w-[400px] my-[20px]">
            <p className="text-[24px] text-[#5B5B5B] font-bold">Location</p>
            <p className="text-[24px] text-[#5B5B5B] font-bold">Status</p>
            <p className="text-[#ACACAC] text-[20px] font-medium">
              <i className="fa-solid fa-location-dot mr-[10px]"></i>
              {product.location}
            </p>
            <p className="text-[#ACACAC] text-[20px] font-medium">
              <i className="fa-solid fa-tag mr-[10px]"></i>
              {product.state}
            </p>
          </div>
          <img src="/assets/linep.png" className="w-[80%]" />
          <div className="flex flex-wrap py-[50px] items-center gap-x-[40px]">
            <div className=" flex w-[186px] justify-around h-[50px] items-center bg-[#F3F3F0] rounded-[100px] text-[#42E6A4] font-bold text-[32px]">
              <span
                className="cursor-pointer"
                onClick={() => {
                  orderedquantity > 1 && setOrderedquantity((prev) => prev - 1);
                }}
              >
                -
              </span>
              <span className="text-[20px]">{orderedquantity}</span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  orderedquantity < product.quantity &&
                    setOrderedquantity((prev) => prev + 1);
                }}
              >
                +
              </span>
            </div>
            <p className="text-[#5B5B5B] font-medium w-[126px]">
              Only{" "}
              <span className="text-[#42E6A4]">
                {" "}
                {product.quantity} {product.unity}
              </span>{" "}
              left! Don’t miss it
            </p>
          </div>
          <div className="flex w-[100%] justify-between relative">
            <form action="">
              <button
                type="submit"
                className="text-white text-[20px] font-bold bg-[#42E6A4] w-[262px]  h-[65px] rounded-[100px]"
              >
                Buy Now
              </button>
            </form>
            <form action="">
              <button
                type="submit"
                className=" text-[20px] font-bold border border-[#5B5B5B] border-[1px] text-[#5B5B5B] border-solid w-[262px]  h-[65px] rounded-[100px]"
              >
                Add to Cart
              </button>
            </form>
            <div className="  absolute bottom-[-240px] flex flex-col justify-around pl-[20px] border border-[#5B5B5B] border-1 h-[198px] w-[90%] rounded-[50px]">
              <div className="">
                <div className="flex gap-x-[10px] ">
                  <img src="/assets/truck.png" className="w-[24px] h-[24px]" />
                  <h1 className="text-[#5B5B5B] text-[20px] font-bold">
                    Free Delivery
                  </h1>
                </div>
                <Link className="font-medium underline text-[#5B5B5B] pl-[30px]">
                  Enter your current location for Deliver Avaibility
                </Link>{" "}
              </div>
              <div className="">
                <div className="flex gap-x-[10px]">
                  <img src="/assets/truck.png" className="w-[24px] h-[24px]" />
                  <h1 className="text-[#5B5B5B] text-[20px] font-bold">
                    Fast Delivery
                  </h1>
                </div>
                <Link className="font-medium underline text-[#5B5B5B] pl-[30px]">
                  Price determined by your location. Details
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
