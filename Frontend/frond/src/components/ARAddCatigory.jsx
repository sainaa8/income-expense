export const CatigoryModal = (props) => {
  const { icon, name } = props;
  return (
    <div>
      <div className="px-[16px] py-[10px] text-[20px] flex gap-[10px] items-center cursor-pointer">
        {icon}
        <div>{name}</div>
      </div>
    </div>
  );
};

import { FaCirclePlus } from "react-icons/fa6";

import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill } from "react-icons/pi";

import {
  PiGiftFill,
  PiWineFill,
  PiTaxiFill,
  PiTShirtFill,
} from "react-icons/pi";
import { HiComputerDesktop } from "react-icons/hi2";


import { useContext } from "react";
import { AddCatigoryContext } from "./AddCatiProvider";
import { AddRecordContext } from "./AddRecordProvider";

export const Addati = () => {
  const { addCati, setAddCati } = useContext(AddCatigoryContext);
  const { record, setRecord } = useContext(AddRecordContext);

  const handlerClick = () => {
    setRecord(false);
    setAddCati(!addCati);
  };

  const options = [
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <PiGiftFill size={24} color="#FF4545" />, name: "Gift" },
    { icon: <PiForkKnifeFill size={24} color="#FB8A22" />, name: "Food" },
    { icon: <PiWineFill size={24} color="#A804AB" />, name: "Drink" },
    { icon: <PiTaxiFill size={24} color="#EAB308" />, name: "Taxi" },
    { icon: <PiTShirtFill size={24} color="#EAB308" />, name: "Shopping" },
    {
      icon: <HiComputerDesktop size={24} color="#D1D5DB" />,
      name: "Communication",
    },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
    { icon: <GoHomeFill size={24} color="#0166FF" />, name: " Home" },
  ];
  return (
    <div className="overflow-auto h-[310px] ">
      <div
        onClick={handlerClick}
        className="border-b border-gray-200  px-[16px] py-[10px] text-[20px] flex gap-[10px] items-center cursor-pointer"
      >
        <FaCirclePlus className="text-blue-700 " />
        <div>Add Category</div>
      </div>
      <div>
        {options.map((el, id) => (
          <div key={id}>
            <CatigoryModal icon={el.icon} name={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
