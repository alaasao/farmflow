import "./Third.css";
const Third = () => {
  return (
    <div className="third">
      <div className="third-one">
        <img src="./assets/farmlogo.png" className="third-one-logo" />
        <img src="./assets/arrow.png" className="w-25vw" />
        <p className="text-[#5b5b5b] font-normal text-25 lg:text-40 max:text-20">
          Connecting Agriculture, Harvesting Innovation
        </p>
      </div>
      <div className="third-two ">
        {" "}
        <img src="./assets/Vector.png" alt="" className="vector max:hidden " />
        <div className="step">
          <div className="step-circle">
            <div className="step-green-circle">
              <p className="max:text-16">01</p>
            </div>
          </div>
          <div className="flex-row desc">
            <img src="./assets/arrow-small-right.png" alt="" />
            <p className="text-16">
              Sign up and showcase your agricultural products.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-circle">
            <div className="step-green-circle">
              <p className="text-16">02</p>
            </div>
          </div>
          <div className="flex-row desc">
            <img src="./assets/arrow-small-right.png" alt="" />
            <p className="text-16">Buyers browse and make easy purchases.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-circle">
            <div className="step-green-circle">
              <p className="text-16">03</p>
            </div>
          </div>
          <div className="flex-row desc">
            <img src="./assets/arrow-small-right.png" alt="" />
            <p className="text-16">
              Connect directly for inquiries and negotiations.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-circle">
            <div className="step-green-circle">
              <p className="text-16">04</p>
            </div>
          </div>
          <div className="flex-row desc">
            <img src="./assets/arrow-small-right.png" alt="" />
            <p className="text-16">
              Find equipment and skilled labor effortlessly.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Third;
