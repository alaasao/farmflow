import { useContext } from "react";




import Slider from "./Slider";
const First = () => {
 

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


  return (
    <div className="px-[8vw] text-[#403C39] mt-[120px]">
 
    <Slider/>

   

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
