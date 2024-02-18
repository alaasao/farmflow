import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";
import image1 from "/assets/logo.png";

const Nav = () => {
  // let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [smallScreen, setSmallscreen] = useState(window.innerWidth < 1340);
  let [showOp, setShowOp] = useState(false);
  let [signed, setSinged] = useState(false);

  let hide = "hidden";

  window.addEventListener("resize", () =>
    setSmallscreen(window.innerWidth < 1340)
  );
  return (
    <div
      className={`nav fixed top-0 z-[10000]${smallScreen ? " pl-[50vw] " : ""}`}
    >
      <img
        src={image1}
        className={`logo ${smallScreen ? "left-[-60px]" : ""}`}
      />
      <ul
        className={`main-links  ${
          smallScreen && !showOp
            ? hide
            : showOp
            ? "absolute z-10 bg-red-600  w-100% left-0 h-100vh flex-col justify-center gap-[50]  bg-gradient-to-b from-teal-500 to-emerald-500 text-white"
            : ""
        }`}
      >
        <li>
          {" "}
          <NavLink
            onClick={() => {
              setShowOp(false);
            }}
            to="/"
            className={({ isActive }) =>
              [
                "link",
                isActive && showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : isActive
                  ? "text-[#02a8a8] after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-[#02a8a8]"
                  : "",
              ].join(" ")
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            onClick={() => {
              setShowOp(false);
            }}
            to="/market"
            className={({ isActive }) =>
              [
                "link",
                isActive && showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : isActive
                  ? "text-[#02a8a8] after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-[#02a8a8]"
                  : "",
              ].join(" ")
            }
          >
            Marketplace
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            onClick={() => {
              setShowOp(false);
            }}
            to="/expert"
            className={({ isActive }) =>
              [
                "link",
                isActive && showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : isActive
                  ? "text-[#02a8a8] after:absolute after:bottom-[-15px] after:w-[230px] after:left-1.5 after:border-b-2 after:border-solid after:border-[#02a8a8]"
                  : "",
              ].join(" ")
            }
          >
            Experts and Recruietments
          </NavLink>
        </li>
        <li>
          {" "}
          {/* <NavLink
            onClick={() => {
              setShowOp(false);
            }}
            to="/recuietments"
            className={({ isActive }) =>
              [
                "link",
                isActive && showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : isActive
                  ? "text-[#02a8a8] after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-[#02a8a8]"
                  : "",
              ].join(" ")
            }
          >
            Recruietments
          </NavLink> */}
        </li>
        <li>
          {" "}
          <NavLink
            onClick={() => {
              setShowOp(false);
            }}
            to="/not_yet"
            className={({ isActive }) =>
              [
                "link",
                isActive && showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : isActive
                  ? "text-[#02a8a8] after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-[#02a8a8]"
                  : "",
              ].join(" ")
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/not_yet2"
            onClick={() => {
              setShowOp(false);
            }}
            className={() =>
              [
                "link",
                showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : "",
              ].join(" ")
            }
          >
            FAQ
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            onClick={() => {
              setShowOp(false);
            }}
            to="/not_yet3"
            className={({ isActive }) =>
              [
                "link",
                isActive && showOp
                  ? "text-black after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-black"
                  : isActive
                  ? "text-[#02a8a8] after:absolute after:bottom-[-15px] after:w-4/5 after:left-1.5 after:border-b-2 after:border-solid after:border-[#02a8a8]"
                  : "",
              ].join(" ")
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <ul
        className={`sign-links ${
          signed
            ? "hidden"
            : smallScreen && showOp
            ? "hidden"
            : " translate-x-[-50%]"
        }`}
      >
        <li>
          <Link to="/signin" className="link sign-in">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup" className="link sign-up">
            Sign Up
          </Link>
        </li>
      </ul>
      <ul
        className={`${
          signed
            ? "w-[200px] h-[60px] rounded-[100px] bg-[#018383] self-center flex gap-[24px] items-center px-[12px]  "
            : "hidden"
        } ${smallScreen && signed && "translate-x-[-60%] "}"}`}
      >
        <Link className="">
          {" "}
          <img
            src="../assets/Shopping.png"
            className="w-[31px] h-[30px]"
            alt=""
          />
        </Link>
        <Link>
          <i className="fa-solid fa-magnifying-glass bg-transparent text-white text-[25px]"></i>
        </Link>
        <Link to="/" className="">
          <i className="fa-regular fa-heart text-[25px] text-white "></i>
        </Link>
        <Link>
          <i className="fa-regular fa-user text-[25px] text-white"></i>
        </Link>
      </ul>
      <i
        className={`${
          smallScreen ? "absolute right-2 top-12 z-10" : "hidden"
        } fa-solid fa-bars self-center text-30`}
        onClick={() => setShowOp((prev) => !prev)}
      ></i>
    </div>
  );
};

export default Nav;
