import { MdRemoveRedEye } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { RiEyeCloseLine } from "react-icons/ri";

import axios from "axios";
export const CatigoryMenu = (props) => {
  const { names, eye } = props;

  return (
    <div className="flex justify-between items-center py-[10px]">
      <div className="flex items-center gap-2">
        <div className="text-[20px] text-gray-500">{eye}</div>

        <div>{names}</div>
      </div>
      <div>
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

import { FaPlus } from "react-icons/fa6";
// import { Login } from "./Login";
import { useContext, useState } from "react";
import { AddCatigoryContext } from "./AddCatiProvider";
import { mapdataContext } from "./MapDataProvider";

export const Category = () => {
  const { addCati, setAddCati } = useContext(AddCatigoryContext);
  const { setMapdata } = useContext(mapdataContext);
  const [temp, setTemp] = useState("");

  const handleClick = () => {
    setAddCati(false);
  };

  const catigoryName = [
    {
      name: "Home",
      id: 1,
    },
    {
      name: "Gift",
      id: 2,
    },
    {
      name: "Food",
      id: 3,
    },
    {
      name: "Drink",
      id: 4,
    },
    {
      name: "Taxi",
      id: 5,
    },
    {
      name: "Shopping",
      id: 6,
    },
    {
      name: "Communication",
      id: 7,
    },
  ];
  const handleLog = async (el, id) => {
    const mail = localStorage.getItem("Email");
    const temp = el.name
      .replace("&", "")
      .replace(",", "")
      .replace(" ", "")
      .replace(" ", "");
    // console.log(temp);

    const { data } = await axios.post("http://localhost:8000/getCategorydata", {
      category: temp,
    });
    setTemp(temp);
    const catedata = data?.filter((el) => el.email === mail);

    setMapdata(catedata);
  };

  return (
    <div className="workSans">
      <div className="font-semibold text-[19px] flex justify-between">
        Category
        <div className="text-[17px] font-[1px] text-gray-200">Clear</div>
      </div>
      <div className="mt-[16px]">
        {catigoryName.map((el, id) => (
          <div
            key={id}
            className="mt-[3px] ml-[10px]"
            onClick={() => handleLog(el)}
          >
            <CatigoryMenu
              names={el.name}
              eye={el.name == temp ? <MdRemoveRedEye /> : <RiEyeCloseLine />}
              // eye={<MdRemoveRedEye />}
            />
          </div>
        ))}
        <div
          onClick={handleClick}
          className="ml-[10px] mt-[10px] flex gap-[10px] cursor-pointer"
        >
          <div className="text-[20px] text-blue-500">
            <FaPlus />
          </div>
          add catigory
        </div>
      </div>
    </div>
  );
};

// const [press, setPress] = useState(false);
// const handle = () => {
//   if (press === data.length) {
//     setPress(false);
//   } else {
//     setPress(true);
//   }
// };
