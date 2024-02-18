const Filter = () => {
  return (
    <div className="mt-[48px] flex w-[100vw] px-[158px] justify-between pt-[48px] pb-[108px] relative">
      <img
        src="./assets/line1.png"
        className="absolute left-0 z-neg1 top-[0px] w-[100vw]"
      />

      <ul className="flex gap-x-[24px] w-[50vw] flex-wrap gap-y-[20px] ">
        <li className="flex gap-[15px] items-center text-[#403C39] bg-[#C4C4C4] rounded-[100px] px-[23px] py-[12px]">
          <div className="font-medium text-[24px]">State</div>
          <i className="fa-solid fa-angle-down text-[22px] "></i>
        </li>
        <li className="flex gap-[15px] items-center text-[#403C39] bg-[#C4C4C4] rounded-[100px] px-[23px] py-[12px]">
          <div className="font-medium text-[24px]">Status</div>
          <i className="fa-solid fa-angle-down text-[22px] "></i>
        </li>
        <li className="flex gap-[15px] items-center text-[#403C39] bg-[#C4C4C4] rounded-[100px] px-[23px] py-[12px]">
          <div className="font-medium text-[24px]">Quantity</div>
          <i className="fa-solid fa-angle-down text-[22px] "></i>
        </li>
        <li className="flex gap-[15px] items-center text-[#403C39] bg-[#C4C4C4] rounded-[100px] px-[23px] py-[12px]">
          <div className="font-medium text-[24px]">Price</div>
          <i className="fa-solid fa-angle-down text-[22px] "></i>
        </li>
        <li className="flex gap-[15px] py-[12px] items-center text-[#403C39] bg-[#C4C4C4] rounded-[100px] px-[23px] ">
          <div className="font-medium text-[24px]"> All Filters</div>
          <i className="fa-solid fa-angle-down text-[22px] "></i>
        </li>
      </ul>
      <div className="w-[203px] flex justify-between px-[24px] items-center py-[6px] border border-[#403C39] rounded-[100px] max-h-[60px]">
        <p className=" text-[#403C39] font-medium text-[24px]">Sort By</p>{" "}
        <i className="fa-solid fa-angle-down text-[16px]  "></i>
      </div>
    </div>
  );
};

export default Filter;
