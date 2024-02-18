import "./Why.css";

const Why = () => {
  return (
    <div className="flex flex-col items-center pl-8vw pr-5vw mt-73 xl:flex-row">
      <div className="desc max-w-49">
        <h1>
          Why <span className="text-[#018383]">Farm</span>
          <span style={{ color: "#42E6A4" }}>Flow?</span>
        </h1>
        <div className="flex flex-col gap-1 text-2xl answers font-poppins">
          <div className="flex-col answer">
            <div className="text-[#949494] font-semibold text-2xl">
              Harvesting Innovation that Delights:
            </div>
            <p className=" text-[#949494] font-normal ">
              <span className="font-semibold text-[#42E6A4] ">
                Seamless User Experience:
              </span>{" "}
              Our intuitive platform connects farmers and agronomy experts
              effortlessly, making agricultural logistics a breeze.{" "}
            </p>
          </div>
          <div className="answer">
            <p className=" text-[#949494] font-normal ">
              <span className="font-semibold text-[#42E6A4] ">
                Tailored to Your Needs:{" "}
              </span>
              FarmFlow offers personalized solutions, precisely designed to
              optimize your brand's growth in the agronomic landscape.
            </p>{" "}
          </div>
          <div className="answer">
            <p className=" text-[#949494] font-normal ">
              <span className="font-semibold text-[#42E6A4] ">
                Precision and Perfection:{" "}
              </span>
              With meticulous attention to detail, we craft an unparalleled
              marketplace for agricultural products and services.
            </p>
          </div>
          <div className="answer">
            <p className=" text-[#949494] font-normal ">
              <span className="font-semibold text-[#42E6A4] ">
                Cultivating Success Together:{" "}
              </span>
              : Our exceptional customer service accompanies you at every step,
              ensuring a fruitful partnership from inception to fruition.
            </p>
          </div>
        </div>
      </div>
      <img src="./assets/why.png" className="h-0 mt-20 xl:h-auto" alt="" />
    </div>
  );
};

export default Why;
