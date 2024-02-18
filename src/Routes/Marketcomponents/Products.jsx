import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import arr from "./data";
import Contextt from "../Context";
const Products = () => {
  let { clickedType } = useContext(Contextt);
  let [viewAll, setView] = useState(false);
  let [sorry, setSorry] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/crud/products/", {
      method: "Get",
      headers: { "Content-Type": "application/json" },

    })
      .then((response) => response.json())
      .then((data) => {

        setArr(data)
      })
      .catch((error) => { console.log(error); })
  
    
    fetch("http://127.0.0.1:8000/crud/products_images/", {
    method: "Get",
    headers: { "Content-Type": "application/json" },

  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data from response:", data);
      setImgArr(data)
    })
    .catch((error) => { console.log(error); })

}
  

    , [])
  let [imgArr,setImgArr]=useState([])
  let [arr,setArr]=useState([])
  let array = arr.filter((e) => e.category === clickedType);
  useEffect(() => {
    let array = arr.filter((e) => e.category === clickedType);
    setSorry(array.length < 1);
  }, [clickedType]);
  return (
    <div className="">
      <h1 className="px-[8.22vw] text-[48px] font-bold text-[#403C39]">
        Products For You!
      </h1>
      <div
        className={`px-[8.22vw] mt-[60px] flex flex-wrap gap-[32px] justify-center overflow-hidden
    ${viewAll ? "h-auto" : "max-h-[2330px]"}`}
      >
        {array.map((e,index) => {
          return (
            <ProductCard
              img={imgArr[0].image}
              title={e.name}
              price={e.price_per_unit}
              location={`${e.wilaya},${e.baladiya}`}
              desc={e.description}
              rate={e.rate}
              ratersNum={e.ratersNumber}
              type={e.category}
              quantity={e.quantity}
              id={e.id}
              key={index}
            />
          );
        })}
      </div>{" "}
      <div
        className={`${
          sorry
            ? "font-bold text-[48px] mx-auto w-[100vw] px-10vw text-red-600"
            : "hidden"
        }`}
      >
        There are no product nor services in this Category for now
      </div>
      <div className="relative">
        <div className="relative">
          {" "}
          <img src="./assets/line2.png" className=" w-[100vw]" />
          <div
            className={`absolute right-[50%] translate-x-[50%] flex flex-col items-center bottom-[-4.1vw] ${
              sorry ? "hidden" : ""
            }`}
            onClick={() => setView((prev) => !prev)}
          >
            <div className="  w-[5vw]   h-[5vw] bg-[#0E0E0E52] rounded-[50%] flex justify-center items-center ">
              <div className="w-[3.6vw] h-[3.6vw] bg-gradient-to-l from-[#42E6A4] via-[#42E6A4] to-[#02A8A8] rounded-[50%] flex justify-center items-center">
                <i
                  className={`fa-solid ${
                    viewAll ? "fa-angle-up" : "fa-angle-down"
                  }  text-[2vw]`}
                ></i>
              </div>
            </div>{" "}
            <p className="font-medium text-[2vw] text-[#403C39]">View More</p>
          </div>
        </div>
        <img src="./assets/line3.png" className=" w-[100vw]" />
        <img
          src="./assets/line4.png"
          className="absolute bottom-[12.69px] z-[-1] w-[100vw]"
        />
      </div>
    </div>
  );
};

export default Products;
