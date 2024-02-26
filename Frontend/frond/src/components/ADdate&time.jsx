import { IoMdArrowDropdown } from "react-icons/io";

export const ADdate = (props) => {
  const { name, handleChange } = props;
  return (
    <div>
      <div className="flex gap-[8px]">
        <div className="flex flex-col gap-2 w-[168px] ">
          Date
          <div className="bg-[#F5F5F5] rounded-[5px] h-[48px] flex items-center pl-[] border border-gray-300 px-[10px] ">
            <input
              onChange={handleChange}
              name="date"
              type="date"
              className="bg-[#F5F5F5]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[168px] ">
          Time
          <div className="bg-[#F5F5F5] rounded-[5px] h-[48px] flex items-center pl-[] border border-gray-300 px-[10px] ">
            <input
              onChange={handleChange}
              name="time"
              type="time"
              className="bg-[#F5F5F5] w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
