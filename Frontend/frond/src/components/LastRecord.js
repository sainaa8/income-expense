export const CatigoryType = (props) => {
  const { coor, icon, iCol, amount, cate, time } = props;
  return (
    <div>
      <div className="bg-white rounded-lg flex justify-between items-center border border-gray-300 ">
        <div className="flex px-[25px] py-[17px] gap-[25px] items-center text-[30px]">
          <div
            className={`rounded-full  px-[6px]  py-[6px] w-fit h-fit text-white text-[40px] bg-red-400 ${iCol}`}
          >
            {icon}
          </div>
          <div>
            <div>{cate}</div>
            <div className="text-gray-500">{time}</div>
          </div>
        </div>
        <div className={`mr-[25px] text-[30px] font-semibold ${coor}`}>
          ₮ {amount}
        </div>
      </div>
    </div>
  );
};

import { MdHomeFilled } from "react-icons/md";
import { HiGift } from "react-icons/hi2";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaTaxi } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";

export const LastRecord = (props) => {
  const { records } = props;
  return (
    <div className="workSans">
      <div className="bg-white rounded-lg">
        <div className="border-b-2 pb-2 py-[16px] border-gray-300">
          <div className="text-[26px] ml-[30px] font-semibold">
            Last Records
          </div>
        </div>
        <div>
          {records?.slice(0, 10).map((el, index) => (
            <div key={index}>
              <CatigoryType
                coor={
                  el.types === "expence" ? "text-red-500" : "text-green-500"
                }
                amount={el.amount}
                cate={el.category}
                time={el.time}
                icon={
                  (el.category === "Home" && <MdHomeFilled />) ||
                  (el.category === "Gift" && <HiGift />) ||
                  (el.category === "Food" && <PiForkKnifeFill />) ||
                  (el.category === "Taxi" && <FaTaxi />) ||
                  (el.category === "Drink" && <BiSolidDrink />) ||
                  (el.category === "Shopping" && <HiMiniShoppingCart />) ||
                  (el.category === "Communication" && (
                    <PiTelevisionSimpleDuotone />
                  ))
                }
                iCol={
                  (el.category === "Home" && "bg-blue-400") ||
                  (el.category === "Gift" && "bg-yellow-400") ||
                  (el.category === "Food" && "bg-red-400") ||
                  (el.category === "Taxi" && "bg-yellow-400") ||
                  (el.category === "Drink" && "bg-purple-400") ||
                  (el.category === "Shopping" && "bg-purple-200") ||
                  (el.category === "Communication" && "bg-gray-400")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
