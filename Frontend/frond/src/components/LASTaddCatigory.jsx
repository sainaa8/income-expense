import { MdClear } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

import { useContext } from "react";
import { AddCatigoryContext } from "./AddCatiProvider";
import { useState } from "react";

import { Icons } from "./ICONS";
export const LastCatigory = () => {

  const { addCati, setAddCati } = useContext(AddCatigoryContext);
  const [cicon, setCicon]=useState(false)
  
  const handlerIcon=()=>{
    setCicon(!cicon)
  }
  return (
    <div className="w-[594px] bg-white rounded-[10px] fixed index-200 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <div className="w-[100%]  text-[24px] font-semibold ">
        <div className="px-[24px] flex justify-between py-[20px] border-b border-black">
          Add Category
          <div onClick={()=>setAddCati(true)} className="text-[30px] cursor-pointer">
            <MdClear />
          </div>
        </div>
        <div className="px-[24px] py-[24px]">
          <div className="w-[546px] h-[140px]  flex flex-col justify-between">
            <div className="flex justify-between">
              <div onClick={handlerIcon} className="w-[100px] h-[56px] bg-[#F5F5F5] flex justify-center items-center gap-[16px] rounded-lg">
                <MdHomeFilled/>
                {cicon ? <IoMdArrowDropup/>: <IoMdArrowDropdown/>
}
              
              </div>
              <div className="w-[427px] h-[56px] bg-[#F5F5F5] rounded-lg flex justify-between items-center px-[20px]">
                <input placeholder="Name" className="bg-[#F5F5F5] outline-none"/>
                <IoMdArrowDropdown/>

              </div>
            </div>
            {cicon && <div > <Icons/></div>}
            <div className="w-[100%] h-[46px] bg-green-500 rounded-[100px] text-white flex justify-center items-center "> Add</div>
          </div>

        </div>
      </div>
    </div>
  );
};
