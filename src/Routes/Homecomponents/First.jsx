import ServiceType from "./ServiceType";
import "./First.css";
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
      img: "./assets/recruitment.png",
      title: "Recruitment",
      desc: "Connect with agronomy experts and professionals.",
    },
    {
      img: "./assets/points.png",
      title: "Other",
      desc: "Unique offerings to complement your farming journey.",
    },
  ];
  return (
    <div className="flex flex-col items-center first mt-[120px]">
      <div className=" xl:absolute xl:right-[8.3vw] xl:top-14 ">
        <img src="./assets/farmer_img.png" className="h-50vw 2xl:h-auto " />
      </div>
      <div className="lg:self-start slogan max:text-40 max:w-90vw">
        Farming Made Smarter,{" "}
        <span className=" text-88 max:text-40">Together!</span>
      </div>
      <div className="lg:self-start search max:w-50vw">
        <input type="text" placeholder="Search here" className="py-15" />{" "}
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="lg:self-start options ">
        <div>
          <i className="fa-solid fa-check"></i> Thriving Harvest
        </div>
        <div className="w-max">
          <i className="fa-solid fa-check "></i> Personalized Support
        </div>
        <div className="w-max">
          <i className="fa-solid fa-check"></i> Efficient & Reliable
        </div>
        <div>
          <i className="fa-solid fa-check"></i> Thriving Harvest
        </div>
      </div>
      <div className="our">Our Service</div>
      <div className="our-services">
        {arr.map((el) => {
          return (
            <ServiceType
              img={el.img}
              title={el.title}
              desc={el.desc}
              key={el.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default First;
