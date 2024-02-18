import { useState } from "react";
import "./Second.css";
const Second = () => {
  let [showdis, setshow] = useState(false);

  return (
    <div className="how" id="how">
      <div className="how-back">
        <img src="./assets/how.png" className="image" />
        <div className="how-it-works">
          <h1>How it works</h1>
          <p className={`${showdis ? "" : "none"}`}>
            {" "}
            As a farmer, you can easily sign up and create your profile,
            showcasing your finest produce and products. Buyers can browse
            through a diverse selection of offerings and make purchases with
            ease. Our platform also facilitates seamless communication, allowing
            farmers and buyers to connect directly for any inquiries or
            negotiations. With FarmFlow, finding the right equipment or skilled
            labor is just a click away. Join us today and experience the
            convenience and efficiency of our streamlined agricultural
            marketplace.
          </p>{" "}
        </div>
        <div
          className="circle"
          onClick={() => {
            setshow((prev) => !prev);
          }}
        >
          <div className="green-circle">
            <i
              className={`text-[40px] fa-solid ${
                showdis ? "fa-angle-up" : "fa-angle-down"
              }  `}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
