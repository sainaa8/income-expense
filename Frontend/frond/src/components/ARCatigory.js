import { useState } from "react";
import { Addati } from "./ARAddCatigory";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export const ARCatigory = (props) => {
  const { main, name, setRecordData, setValue, value } = props;
  const [category, setCategory] = useState(true);

  const handleCategory = () => {
    setCategory(!category);
  };

  return (
    <div>
      <div className="mb-[8px]">Category</div>
      <div
        onClick={handleCategory}
        className=" w-[348px] h-[48px] bg-[#F5F5F5] px-[16px] rounded-[5px] border border-gray-300 flex items-center justify-between"
      >
        <input
          name={name}
          value={value}
          placeholder={`${main ? "Choose" : "Find or choose category"}`}
          className="h-[30px] w-[70%] bg-[#F5F5F5] outline-none"
          type="text"
        />
        <div>{category ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}</div>
      </div>
      {!category && (
        <div className="absolute w-[348px]  bg-white  rounded-[5px] shadow-2xl border border-gray-300">
          <Addati
            setRecordData={setRecordData}
            setCategory={setCategory}
            setValue={setValue}
          />
        </div>
      )}
    </div>
  );
};
