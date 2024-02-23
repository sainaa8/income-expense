import { useState } from "react";
import { Addati } from "./ARAddCatigory";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export const ARCatigory = (props) => {
  const { main, name, handleChange } = props;
  const [category, setCategory] = useState(true);
  const [value, setValue] = useState();
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
          // name={name}
          // onChange={handleChange}
          value={value}
          placeholder={`${main ? "Choose" : "Find or choose category"}`}
          className="h-[30px] w-[70%] bg-[#F5F5F5] outline-none"
        />
        <div>{category ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}</div>
      </div>
      {!category && (
        <div className="absolute w-[348px]  bg-white  rounded-[5px] shadow-2xl border border-gray-300">
          <Addati setCategory={setCategory} setValue={setValue} />
        </div>
      )}
    </div>
  );
};
