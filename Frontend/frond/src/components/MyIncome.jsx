import { GoDotFill } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa6";

export const MyIncome = () => {
  return (
    <div className="workSans">
      <div className=" bg-white rounded-[12px]">
        <div className="flex items-center  pl-[24px] gap-[9px] w-[456px] h-[56px]  ">
          <GoDotFill className="text-green-500" />
          <div className="text-[23px] font-[600]">Your Income</div>
        </div>
        <div className="mt-[20px]  h-[180px] ml-[24px] flex flex-col gap-[20px]">
          <div>
            <div className="text-[38px] font-[600]">1.200.000</div>
            <div className="text-[16px] text-[#64748B]">Your Income Amount</div>
          </div>

          <div className="flex gap-[5px] text-[16px]">
            <div className="px-[5px] py-[5px] rounded-full bg-green-500 text-white text-[14px]">
              <FaArrowUp />
            </div>
            <div className="text-[16px]">32% from last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};
