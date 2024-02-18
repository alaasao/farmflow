import { useContext, useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";
import arr from "./data";
import array from './Recdata'
import RecCard from "./RecCard";

const Expertss = () => {
 
  let [viewAll, setView] = useState(false);
  let [viewAllRec, setViewRec] = useState(true);

 
  return (
    <>
    <div className="">
      <h1 className="px-[8.22vw] text-[48px] font-bold text-[#403C39]">
      Experts For You!
      </h1>
      <div
        className={`px-[8.22vw] mt-[60px] flex flex-wrap gap-[32px] justify-center overflow-hidden
    ${viewAll ? "h-auto" : "max-h-[2830px]"}`}
      >
        {arr.map((e) => {
          return (
            <ExpertCard
              img={e.img}
              title={e.title}
              price={e.price}
              
              location={e.location}
              desc={e.dsec}
              rate={e.rate}
              ratersNum={e.ratersNumber}
              type={e.type}
      
              id={e.id}
              key={arr.indexOf(e)}
            />
          );
        })}
      </div>{" "}
      <div
        className={`${arr.length > 0 ? "hidden" :
          "font-bold text-[48px] mx-auto w-[100vw] px-10vw text-red-600"
       
        }`}
      >
        There are no product nor services in this Category for now
      </div>
      <div className="relative mb-[100px]">
        <div className="relative pb-[100px]">
          {" "}
    
          {   arr.length>12 && <div
            className={`absolute right-[50%] translate-x-[50%] flex flex-col items-center bottom-[-4.1vw] `}
            onClick={() => setView((prev) => !prev)}
          >
           <div className="  w-[5vw]   h-[5vw] bg-[#0E0E0E52] rounded-[50%] flex justify-center items-center  ">
              <div className="w-[3.6vw] h-[3.6vw] bg-gradient-to-l from-[#42E6A4] via-[#42E6A4] to-[#02A8A8] rounded-[50%] flex justify-center items-center">
                <i
                  className={`fa-solid ${
                    viewAll ? "fa-angle-up" : "fa-angle-down"
                  }  text-[2vw]`}
                ></i>
              </div>
            </div>
            <p className="font-medium text-[2vw] text-[#403C39]">{viewAll?"View Less ":"View More"}</p>
          </div>}
        </div>

        <img
          src="./assets/vec17.png"
          className="absolute bottom-[12.69px] z-[-1] w-[100vw]"
        />
      </div>
 
    </div>
    <div className="relative ">
      <h1 className="px-[8.22vw] text-[48px] font-bold text-[#403C39]">
      Jobs For You!
      </h1>
      <div
        className={`px-[8.22vw] mt-[60px] flex flex-wrap gap-[32px] justify-center overflow-hidden
    ${viewAllRec ? "h-auto" : "max-h-[1792px] pb-[120px]"}`}
      >
        {array.map((e) => {
          return (
            <RecCard
              img={e.img}
              title={e.title}
   
              
              location={e.location}
              desc={e.dsec}

              type={e.type}
      
              id={e.id}
              key={arr.indexOf(e)}
            />
          );
        })}
      </div>{" "}
      <div
        className={`${arr.length > 0 ? "hidden" :
          "font-bold text-[48px] mx-auto w-[100vw] px-10vw text-red-600"
       
        }`}
      >
        There are no product nor services in this Category for now
      </div>
      <div className="relative mb-[100px]">
      <div   className={`relative ${array.length>8 ?"pb-[100px]":""}`}>
          {" "}
    
          {   array.length>8 && <div
            className={`absolute right-[50%] translate-x-[50%] flex flex-col items-center bottom-[-4.1vw] `}
            onClick={() => setViewRec((prev) => !prev)}
          >
           <div className="  w-[5vw]   h-[5vw] bg-[#0E0E0E52] rounded-[50%] flex justify-center items-center  ">
              <div className="w-[3.6vw] h-[3.6vw] bg-gradient-to-l from-[#42E6A4] via-[#42E6A4] to-[#02A8A8] rounded-[50%] flex justify-center items-center">
                <i
                  className={`fa-solid ${
                    viewAllRec ? "fa-angle-up" : "fa-angle-down"
                  }  text-[2vw]`}
                ></i>
              </div>
            </div>
            <p className="font-medium text-[2vw] text-[#403C39]">{viewAllRec?"View Less ":"View More"}</p>
          </div>}
        </div>

       
      </div> <img
          src="./assets/vec17.png"
          className=" absolute bottom-[-200px] right-[-5%] z-[-1] w-[110vw]"
        />
 
    </div></>
  );
};

export default Expertss;
