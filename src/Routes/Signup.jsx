import { useState } from "react";
import "./animation.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  let [next, setNext] = useState(false);
  let [showpass1, setShowpass1] = useState(false);
  let [showpass2, setShowpass2] = useState(false);
  const navigate = useNavigate();
  const HandelSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    let data = {};
    for (let [key, value] of d.entries()) {
      data[key] = value;
    }

    fetch("http://127.0.0.1:8000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from response:", data);
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className=" pr-[12vw] pl-[8.3vw] ">
      <img
        src="/assets/logo.png"
        className="absolute z-[-2] top-0 left-0 h-[100vh] max:w-[400vw]"
      />
      <img
        src={`/assets/${next ? "signupline2" : "signupline"}.png`}
        className={`absolute z-[-1] top-0  w-[70vw] h-[100vh] max:hidden ${
          next ? "left-[300px]" : "left-0"
        }`}
      />
      <div
        className={`pt-[115px] w-[80.7vw] flex justify-between max:flex-col max:items-center ${
          next ? "animate-slideFromRight  flex-row-reverse" : ""
        }`}
      >
        {" "}
        <img
          src={`/assets/${next ? "marhba" : "signupfarmer"}.png`}
          className="w-[38vw] h-[750px] max:max-w-auto max:min-w-[80vw] max:mb-[100px]"
        />
        <form
          className="flex flex-col items-center w-[30vw] max:w-[100%] max:min-w-[80vw]"
          onSubmit={HandelSubmit}
        >
          <p className="font-normal mb-[32px] mt-[6px]">Welcome to FarmFlow!</p>
          <div className="max:min-w-[290px] max:max-w-[438px] max:w-22vw w-[438px] bg-[#DAFAFA] rounded-[100px] h-[78px] flex items-center justify-center mb-[24px]">
            <div
              className={`w-[44%] h-[53px] flex items-center justify-center`}
            >
              {" "}
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  [
                    "w-[100%] flex items-center justify-center rounded-[100px] h-[100%]",
                    isActive ? "text-white bg-[#02A8A8] " : "text-[#02A8A8]",
                  ].join(" ")
                }
              >
                Sign In
              </NavLink>
            </div>
            <div
              className={`w-[44%] h-[53px] flex items-center justify-center`}
            >
              {" "}
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  [
                    "w-[100%] flex items-center justify-center rounded-[100px] h-[100%]",
                    isActive ? "text-white bg-[#02A8A8] " : "text-[#02A8A8]",
                  ].join(" ")
                }
              >
                Sign Up
              </NavLink>
            </div>
          </div>
          <p className="text-[20px] text-[#5B5B5B] mb-[36px] max:text-center">
            {next
              ? "Get ready for a seamless agricultural experience. Our platform connects farmers and buyers, making transactions effortless. Showcase your products, connect with potential customers, and be part of a vibrant farming community. Let FarmFlow be your partner in agricultural success!"
              : "      Welcome back to FarmFlow! Explore our user-friendly platform to showcase your produce, connect with buyers, and enjoy smooth transactions. Join us and experience agricultural success!"}
          </p>
          <div
            className={`h-[118px] w-[100%] mb-[61px] ${next ? "hidden" : ""}`}
          >
            <p>User name</p>
            <input
              type="text"
              placeholder="Enter your User name"
              name="username"
              className="mt-[18px] pl-[41px] h-[71px] border border-[#02A8A8] w-[100%] rounded-[16px] focus:outline-none"
            />
          </div>
          <div
            className={`h-[118px] w-[100%] mb-[61px] ${next ? "hidden" : ""}`}
          >
            <p>Email</p>
            <div className="relative">
              {" "}
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                className="mt-[18px] pl-[41px] h-[71px] border border-[#02A8A8] w-[100%] rounded-[16px] focus:outline-none "
              />
            </div>
          </div>
          <div
            className={`h-[118px] w-[100%] mb-[31px] relative ${
              next ? "" : "hidden"
            }`}
          >
            <p>Password</p>
            <input
              type={`${showpass1 ? "text" : "password"}`}
              placeholder="Enter your password"
              name="password"
              className="mt-[18px] pl-[41px] h-[71px] border border-[#02A8A8] w-[100%] rounded-[16px] focus:outline-none"
            />{" "}
            <i
              className={`absolute  right-[33px] bottom-[26px] text-[24px] cursor-pointer ${
                showpass1 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }`}
              onClick={() => {
                setShowpass1((prev) => !prev);
              }}
            ></i>
          </div>
          <div
            className={`h-[118px] w-[100%] mb-[31px] ${next ? "" : "hidden"}`}
          >
            <p>Confirm Password</p>
            <div className="relative">
              {" "}
              <input
                type={`${showpass2 ? "text" : "password"}`}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="mt-[18px] pl-[41px] h-[71px] border border-[#02A8A8] w-[100%] rounded-[16px] focus:outline-none "
              />
              <i
                className={`absolute  right-[33px] bottom-[26px] text-[24px] cursor-pointer ${
                  showpass2 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }`}
                onClick={() => {
                  setShowpass2((prev) => !prev);
                }}
              ></i>
            </div>
          </div>
          {next ? (
            <button
              type="submit"
              className="w-[308px]  max:mb-[100px] flex items-center justify-center cursor-pointer rounded-[100px] h-[65px] text-white bg-[#02A8A8] self-end max:w-[200px] max:self-center"
            >
              <a href="/#faq"> Sign Up</a>
            </button>
          ) : (
            <div
              className="w-[308px]  max:mb-[100px] flex items-center justify-center cursor-pointer rounded-[100px] h-[65px] text-white bg-[#02A8A8] self-end max:w-[200px] max:self-center"
              onClick={() => setNext((prev) => !prev)}
            >
              Next
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
