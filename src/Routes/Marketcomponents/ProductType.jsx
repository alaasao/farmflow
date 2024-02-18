import { useContext } from "react";
import Contextt from "../Context";

const ProductType = ({ img, title, desc, clickedType, onClick }) => {
  function click() {
    onClick();
  }
  return (
    <div
      onClick={click}
      className={` cursor-pointer service hover:scale-110  ${
        clickedType ? "bg-[#42E6A4] rounded-[50px]  " : ""
      }`}
    >
      <img
        src={img}
        className={`mb-[24px duration-500 ${clickedType ? "mx-auto" : ""}`}
      />
      <div
        className={`text-[25px] duration-500 font-medium ${
          clickedType ? "mx-auto" : ""
        }`}
      >
        {title}
      </div>
      <div
        className={`  font-[18px]  duration-500 font-normal ${
          clickedType ? "mx-auto text-center" : ""
        }`}
      >
        {desc}
      </div>
    </div>
  );
};

export default ProductType;
