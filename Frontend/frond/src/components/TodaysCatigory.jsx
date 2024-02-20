import { MdHomeFilled } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";

export const CatigoryType = (props) => {
  const { coor, icon, iCol } = props;
  return (
    <div>
      <div className="bg-white rounded-lg w-[950px] flex justify-between items-center border border-gray-300 ">
        <div className="flex px-[25px] py-[17px] gap-[25px] items-center">
          <input type="checkbox" className="w-[30px] h-[30px] border  " />
          <div
            className={`rounded-full  px-[6px]  py-[6px] w-fit h-fit text-white text-[30px] ${iCol}`}
          >
            {icon}
          </div>
          <div>
            <div>Lending & Renting</div>
            <div className="text-gray-500">14:00</div>
          </div>
        </div>
        <div className={`mr-[25px] text-[24px] font-semibold ${coor}`}>
          1,000₮
        </div>
      </div>
    </div>
  );
};

export const TodaysCatigory = () => {
  const gain = [
    {
      icon: <MdHomeFilled />,
      iCol: "bg-blue-500",
      col: "text-green-500",
    },
    {
      icon: <PiForkKnifeFill />,
      iCol: "bg-red-500",
      col: "text-red-500",
    },
    {
      icon: <PiForkKnifeFill />,
      iCol: "bg-red-500",
      col: "text-orange-300",
    },
    {
      icon: <PiForkKnifeFill />,
      iCol: "bg-red-500",
      col: "text-orange-300",
    },
    {
      icon: <PiForkKnifeFill />,
      iCol: "bg-red-500",
      col: "text-orange-300",
    },
  ];

  return (
    <div className="workSans">
      <div className="text-[24px] font-semibold mb-[12px]">Today</div>
      <div className="flex flex-col gap-[10px]">
        {gain.map((el, id) => (
          <div key={id}>
            <CatigoryType coor={el.col} icon={el.icon} iCol={el.iCol} />
          </div>
        ))}
      </div>
    </div>
  );
};
