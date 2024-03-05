import { CatigoryType } from "./TodaysCatigory";

// import { PiForkKnifeFill } from "react-icons/pi";

import { MdHomeFilled } from "react-icons/md";
import { HiGift } from "react-icons/hi2";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaTaxi } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";

import { useContext } from "react";
import { mapdataContext } from "./MapDataProvider";

export const YesterdaysCatigory = (props) => {
  const { records } = props;

  const { mapdata, setMapdata } = useContext(mapdataContext);

  const today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let day = yesterday.getDate() - 1;
  let month = yesterday.getMonth() + 1;
  let year = yesterday.getFullYear();
  let formattedMonth = month < 10 ? `0${month}` : month;
  let formattedDay = day < 10 ? `0${day}` : day;
  let currentDate = `${year}-${formattedMonth}-${formattedDay}`;
  console.log(currentDate);

  console.log(records);
  const yeaterdaysRecords = mapdata?.filter(
    (el) => el.created_at.split("T")[0] === currentDate
  );
  console.log(yeaterdaysRecords);

  return (
    <div className="workSans">
      <div className="text-[24px] font-semibold mb-[12px]">Yesterdsay</div>
      <div className="flex flex-col gap-[10px]">
        {yeaterdaysRecords?.slice(0, 5).map((el, id) => (
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
                (el.category === "Communication" && "bg-gray-500")
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
