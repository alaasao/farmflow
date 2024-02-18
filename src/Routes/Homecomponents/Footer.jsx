import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className="w-[100%]  flex mb-0 flex-col bg-gradient-to-b from-teal-500 to-emerald-500 w-[100vw] h-[538px] max:h-[1200px] max:relative">
      <div className="lg:z-10 lg:absolute lg:h-400 lg:w-[30vw] lg:overflow-hidden">
        <img
          src="./assets/footerLogo.png"
          className="  lg:z-10 lg:absolute  lg:w-[90vw] max:w-[200vw] max:h-[400px] "
        />
      </div>

      <div className="flex mt-[60px] h-[242px] mb-[110px] max:flex-col max:h-[800px] max:justify-between max:mb-[0px] max:mt-[-500px]">
        <div className="font-bold text-white ml-[26vw] max:ml-[0] max:mt-[300px] max:mb-[50px] lg:border-x-[4px]">
          <ul className="flex flex-col justify-between cursor-pointer pl-[7vw] pr-[10vw] h-[247px]">
            <li className="hover:scale-125">Home </li>
            <li className="hover:scale-125">Market </li>
            <li className="hover:scale-125" onClick={()=>{navigate('/how')}}>How It’s Work</li>
            <li className="hover:scale-125" onClick={()=>{navigate('/faq')}}>FAQ </li>
            <li className="hover:scale-125">Contact</li>
          </ul>
        </div>
        <div className="font-bold text-white lg:border-r-[4px] max:border-y-[4px] max:w-[400px]">
          <ul className="flex flex-col justify-between cursor-pointer pl-[7vw] pr-[4vw] h-[135px] max:my-[100px] ">
            <li className="hover:scale-125">FARMFLOW </li>
            <li className="hover:scale-125">CONDITIONS </li>
            <li className="hover:scale-125">LICENSES</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[60px] ml-[3vw] max:mt-[10vw]">
          <div className="font-bold text-white">SOCIALIZE WITH FarmFlow</div>
          <div className="flex flex-wrap gap-[30px]">
            <i className="fa-brands fa-facebook flex w-[40px] h-[40px] bg-white rounded-[50%]  justify-center items-center text-[#14b8a6] cursor-pointer hover:scale-125"></i>
            <i className="fa-brands fa-twitter flex w-[40px] h-[40px] bg-white rounded-[50%]  justify-center items-center text-[#14b8a6] cursor-pointer hover:scale-125 "></i>
            <i className="fa-brands fa-linkedin-in flex w-[40px] h-[40px] bg-white rounded-[50%]  justify-center items-center text-[#14b8a6] cursor-pointer hover:scale-125"></i>
            <i className="fa-brands fa-youtube flex w-[40px] h-[40px] bg-white rounded-[50%] justify-center items-center text-[#14b8a6] cursor-pointer hover:scale-125"></i>
            <i className="fa-brands fa-instagram flex w-[40px] h-[40px] bg-white rounded-[50%]  justify-center items-center text-[#14b8a6] cursor-pointer hover:scale-125"></i>
            <i className="fa-brands fa-pinterest flex w-[40px] h-[40px] bg-white rounded-[50%]  justify-center items-center text-[#14b8a6] cursor-pointer hover:scale-125"></i>
          </div>
        </div>{" "}
      </div>
      <img
        src="./assets/footervec.png"
        className="max:absolute mx-auto max:bottom-[90px]  max:pl-[11vw] w-[83vw]"
      />
      <div className="mx-auto mt-[64px] font-bold max:absolute max:bottom-[10px] max:px-[10px] w-[100%] flex justify-center items-center text-white">
        2023 © FramFlow - BY estaW3na - ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
