import { useContext, useState } from "react";
import "../../App.css";
import Contextt from "../Context";
import { Link } from "react-router-dom";
const ProductCard = ({
  img,
  title,
  price,
  location,
  rate,
  ratersNum,
  desc,
  type,
  quantity,
  id
}) => {
  const { clickedType } = useContext(Contextt);
console.log(img)
  let [likedByUser, setLiked] = useState(false); //when u do the login work take this condition and the onclick func out
  let [addedByUser, setAdded] = useState(true); //same goes here

  return (
    <div
      className={`w-[410px] min-w-[270px]  h-[551px] flex flex-col justify-between font-poppins overflow-hidden overflow-hidden `}
    >
      <div className="relative ">
        <img src={img} className="w-[100%] h-[396px]" />
        <i
          className={`fa-regular fa-heart w-[50px] h-[50px] rounded-[50%] absolute right-[24px] top-[11px] flex justify-center items-center cursor-pointer ${
            likedByUser ? "bg-[#42E6A4]" : "bg-white"
          }`}
          onClick={() => setLiked((prev) => !prev)}
        ></i>
      </div>
      <div className="flex w-[100%]   justify-between items-center pr-[15px] ">
      <Link to={`/product/${id}`}>
        <div className="text-[16px] font-bold text-[#403C39]">{title}</div>
      </Link>
        <div className="text-[14px] text-[#5B5B5B] font-bold">{price}DA</div>
      </div>
      <div className="flex gap-[5px] items-center text-[#5B5B5B] text-[12px] ">
        <i className="fa-sharp fa-solid fa-location-dot"></i>
        <div className="font-medium ">{location}</div>
      </div>
      <div className=" text-[#5B5B5B] text-[12px] font-medium pr-[7px] ">
        {desc}
      </div>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        rel="stylesheet"
      />
      <div className="flex  gap-[5px]">
        <span className="score pr-[7px]">
          <div className="score-wrap">
            <span
              className="stars-active "
              style={{ width: ` ${(rate * 100) / 5}%` }}
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
          ({ratersNum})
        </div>
      </div>

      <button
        className={`w-[160px] h-[51px] text-[14px] font-medium text-[#5B5B5B]  flex justify-center border-[#5B5B5B] items-center border rounded-[100px] ${
          addedByUser ? "bg-[#42E6A4]   border-white" : "  "
        }`}
        onClick={() => setAdded((prev) => !prev)}
      >
        Add to Cart
      </button>

    </div>
    
  );
};

export default ProductCard;
