import { MdHomeFilled } from "react-icons/md";
// import { PiForkKnifeFill } from "react-icons/pi";

export const CatigoryType = (props) => {
  const { coor, icon, iCol, amount, cate, time } = props;
  return (
    <div>
      <div className="bg-white rounded-lg w-[950px] flex justify-between items-center border border-gray-300 ">
        <div className="flex px-[25px] py-[17px] gap-[25px] items-center">
          <input type="checkbox" className="w-[30px] h-[30px] border  " />
          <div
            className={`rounded-full  px-[6px]  py-[6px] w-fit h-fit text-white text-[30px] bg-red-400 ${iCol}`}
          >
            {icon}
          </div>
          <div>
            <div>{cate}</div>
            <div className="text-gray-500">{time}</div>
          </div>
        </div>
        <div className={`mr-[25px] text-[24px] font-semibold ${coor}`}>
          ₮ {amount}
        </div>
      </div>
    </div>
  );
};

import { useContext } from "react";
import { IncomeExpenceContext } from "./ExpenceIncomeData";
import { useState, useEffect } from "react";
// import LazyResult from "postcss/lib/lazy-result";
// import { Lavishly_Yours } from "@next/font/google";
// import { FaLastfmSquare } from "react-icons/fa";
import { HiGift } from "react-icons/hi2";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaTaxi } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import { HiMiniShoppingCart } from "react-icons/hi2";

export const TodaysCatigory = () => {
  const { records } = useContext(IncomeExpenceContext);
  const [date, setDate] = useState();
  const [LastDays, setLastDays] = useState([]);
  console.log(records);

  useEffect(() => {
    const lastRecord = records[records.length - 1];
    console.log(lastRecord);
    setDate(lastRecord.date);

    const las = records.filter((el) => el.date === date);
    setLastDays(las);
  }, [date]);

  console.log(date);

  console.log(LastDays);

  return (
    <div className="workSans">
      <div className="text-[24px] font-semibold mb-[12px]">{date}</div>
      <div className="flex flex-col gap-[10px]">
        {LastDays.slice(-6, -1).map((el, id) => (
          <div key={id}>
            <CatigoryType
              coor={el.types === "expence" ? "text-red-500" : "text-green-500"}
              amount={el.amount}
              cate={el.category}
              time={el.time}
              icon={
                (el.category === "Home" && <MdHomeFilled />) ||
                (el.category === "Gift" && <HiGift />) ||
                (el.category === "Food" && <PiForkKnifeFill />) ||
                (el.category === "Taxi" && <FaTaxi />) ||
                (el.category === "Drink" && <BiSolidDrink />) ||
                (el.category === "Shopping" && <HiMiniShoppingCart />)
              }
              iCol={
                (el.category === "Home" && "bg-blue-400") ||
                (el.category === "Gift" && "bg-yellow-400") ||
                (el.category === "Food" && "bg-red-400") ||
                (el.category === "Taxi" && "bg-yellow-400") ||
                (el.category === "Drink" && "bg-purple-400") ||
                (wl.category === "Shopping" && "bg-purple-200")
              }
              // iCol={el.category === "Food" && <PiForkKnifeFill />}
              // icon={el.icon}
              // iCol={el.iCol}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
