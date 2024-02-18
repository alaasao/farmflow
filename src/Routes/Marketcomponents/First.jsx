import { useContext } from "react";


import ProductType from "./ProductType";
import Contextt from "../Context";

import Slider from "./Slider";
const First = () => {
  const { clickedType, setClickedType } = useContext(Contextt);

  let arr = [
    {
      img: "./assets/tractor.png",
      title: "Machinery",
      desc: "Boost productivity with cutting edge farm machinery.",
    },
    {
      img: "./assets/wheat-sack.png",
      title: "Grain",
      desc: "Nature's bounty, nourished by the land",
    },
    {
      img: "./assets/land.png",
      title: "Proprety",
      desc: "Prime land for prosperous farming ventures.",
    },

    {
      img: "./assets/points.png",
      title: "Other",
      desc: "Unique offerings to complement your farming journey.",
    },
  ];
  console.log(clickedType);

  return (
    <div className="px-[8vw] text-[#403C39] mt-[120px]">
      {/* <div className="w-[200vw] flex ">
        <img
          src="./assets/Ads (1).png"
          className={` mb-[64px] w-[84vw] h-[505px] mr-158  transition-all  duration-500 ${
            clickedType !== "Machinery" ? "ml-[100vw] " : " left-[8.22vw]"
          }`}
        />
        <img
          src="./assets/Ads2.png"
          className={` mb-[64px] w-[84vw] h-[505px] mr-158  transition-all  duration-500 ${
            clickedType !== "Grain"
              ? "ml-[100vw]  w-0"
              : " absolute left-[8.22vw]"
          }`}
        />
        <img
          src="./assets/Ads3.png"
          className={` mb-[64px] w-[84vw] h-[505px] mr-158  transition-all  duration-500 ${
            clickedType !== "Proprety"
              ? "ml-[100vw]  w-0"
              : " absolute left-[8.22vw]"
          }`}
        />
      </div>*/}
    <Slider/>

      <h1 className="text-[48px] font-bold">Categories</h1>
      <div className="flex gap-x-[6vw] gap-y-[70px]  mt-[36px] flex-wrap justify-center">
        {arr.map((el) => {
          return (
            <ProductType
              img={el.img}
              title={el.title}
              desc={el.desc}
              clickedType={clickedType === el.title}
              onClick={() => {
                setClickedType(el.title);
              }}
              key={el.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default First;
{
  /* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div> */
}
