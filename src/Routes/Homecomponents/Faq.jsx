const Faq = () => {
  return (
    <div className="flex flex-col items-center mx-auto bg-gradient-to-b from-teal-500 to-emerald-500 w-66vw mt-110 rounded-100 max-h-max mb-108" id="faq">
      <div className="flex flex-col items-center font-bold text-white font-poppins text-36 mt-108">
        FAQ <img src="./assets/greenVector.png" alt="" className="w-21vw" />
      </div>

      <div className="font-light text-center text-white font-poppins text-36 mt-23">
        Leave your question here!
      </div>
      <div className="grid grid-rows-s lg:grid-rows-l gap-x-10 gap-y-39 w-55vw mt-55 lg:grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          className="text-white placeholder-white bg-transparent border-2 border-white rounded-40 pl-42 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="text-white placeholder-white bg-transparent border-2 border-white rounded-40 pl-42 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="text-white placeholder-white bg-transparent border-2 border-white rounded-40 pl-42 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="placeholder-white bg-transparent border-2 border-white texthite rounded-40 pl-42 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="text-white placeholder-white bg-transparent border-2 border-white lg:col-start-1 lg:col-end-3 rounded-40 pl-42 focus:outline-none"
        />
        <textarea
          type="text"
          placeholder="Your Problem"
          className="text-white placeholder-white bg-transparent border-2 border-white resize-none lg:col-start-1 lg:col-end-3 rounded-40 pl-42 pt-27 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-[#02A8A8] flex justify-center items-center w-214 h-48 rounded-40 text-white text-12 mt-67 mb-64 hover:scale-150"
      >
        SEND TO FarmFlow
      </button>
    </div>
  );
};

export default Faq;
