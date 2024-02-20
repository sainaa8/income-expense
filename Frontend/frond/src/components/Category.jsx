import { MdRemoveRedEye } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

export const CatigoryMenu = (props) => {
  const { names } = props;
  return (
    <div className="flex justify-between items-center py-[10px]">
      <div className="flex items-center gap-2">
        <div className="text-[20px] text-gray-500">
          <MdRemoveRedEye />
        </div>

        <div>{names}</div>
      </div>
      <div>
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

import { FaPlus } from "react-icons/fa6";

export const Category = () => {
  const catigoryName = [
    {
      name: "Food & Drinks",
    },
    {
      name: "Shopping",
    },
    {
      name: "Transportation",
    },
    {
      name: "Vehicle",
    },
    {
      name: "Communication, PC",
    },
    {
      name: "Life & Entertainment",
    },
    {
      name: "Financial expenses",
    },
    {
      name: "Investments",
    },
    {
      name: "Income",
    },
    {
      name: "Others",
    },
  ];

  return (
    <div className="workSans">
      <div className="font-semibold text-[19px] flex justify-between">
        Category
        <div className="text-[17px] font-[1px] text-gray-200">Clear</div>
      </div>
      <div className="mt-[16px]">
        {catigoryName.map((el, id) => (
          <div key={id} className="mt-[3px] ml-[10px]">
            <CatigoryMenu names={el.name} />
          </div>
        ))}
        <div className="ml-[10px] mt-[10px] flex gap-[10px]">
          <div className="text-[20px] text-blue-500">
            <FaPlus />
          </div>
          add catigory
        </div>
      </div>
    </div>
  );
};
