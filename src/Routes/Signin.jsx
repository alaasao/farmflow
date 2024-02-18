import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { login } from "../actions/auth";
// export const login = async (data) => {
//   try {
//     const response = await axios.post(
//       "https://auth-alaa.onrender.com/api/auth/",
//       data,
//       { headers: { "Content-Type": "application/json" } }
//     );

//     if (response.status === 200) {
//       console.log("Data from response:", response.data);
//       localStorage.setItem("token", response.data.accessToken);
//       return true; // Signal successful login
//     } else {
//       throw new Error("Invalid login credentials or server error");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     throw error; // Re-throw for internal error handling
//   }
// };
import { useDispatch } from "react-redux";
const Signin = () => {
  let dispatch = useDispatch();
  let [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();
  const HandelSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    let data = {};
    for (let [key, value] of d.entries()) {
      data[key] = value;
    }
    console.log("jj");
    login(data["email"], data["password"]);
    console.log("ff");
  };

  return (
    <div className=" pr-[12vw] pl-[8.3vw] ">
      <img
        src="./assets/logo.png"
        className="absolute z-[-2] top-0 left-0 h-[100vh] max:w-[400vw]"
      />
      <img
        src="./assets/signinline.png"
        className="absolute z-[-1] top-0 left-0 w-[70vw] h-[100vh] max:hidden"
      />
      <div className=" pt-[115px] w-[80.7vw] flex justify-between max:flex-col max:items-center ">
        {" "}
        <img
          src="./assets/signinfarmer.png"
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
          <p className="text-[20px] text-[#5B5B5B] mb-[56px] max:text-center">
            Welcome back to FarmFlow! Explore our user-friendly platform to
            showcase your produce, connect with buyers, and enjoy smooth
            transactions. Join us and experience agricultural success!
          </p>
          <div className="h-[118px] w-[100%] mb-[10px]">
            <p>Email</p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="mt-[18px] pl-[41px] h-[71px] border border-[#02A8A8] w-[100%] rounded-[16px] focus:outline-none"
            />
          </div>
          <div className="h-[118px] w-[100%] mb-[30px]">
            <p>Password</p>
            <div className="relative">
              {" "}
              <input
                type={`${showpass ? "text" : "password"}`}
                placeholder="Enter your Password"
                name="password"
                className="mt-[18px] pl-[41px] h-[71px] border border-[#02A8A8] w-[100%] rounded-[16px] focus:outline-none "
              />
              <i
                className={`absolute  right-[33px] bottom-[22px] text-[24px] cursor-pointer ${
                  showpass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }`}
                onClick={() => {
                  setShowpass((prev) => !prev);
                }}
              ></i>
            </div>
          </div>

          <div className="w-[100%] flex justify-between mb-[50px]">
            <div className="flex items-start text-[12px] font-light text-[#000000] gap-[4px] ">
              <input
                type="checkbox"
                name="jj"
                id=""
                className="w-[19px] h-[19px]"
              />
              <p>Rememebr me</p>
            </div>
            <Link className="text-[12px] font-light text-[#000000]">
              Forgot Password ?
            </Link>
          </div>
          <button
            type="submit"
            className="w-[308px]  max:mb-[100px] flex items-center justify-center rounded-[100px] h-[65px] text-white bg-[#02A8A8] self-end max:w-[200px] max:self-center"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
