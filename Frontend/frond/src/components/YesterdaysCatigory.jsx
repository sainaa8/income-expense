import { CatigoryType } from "./TodaysCatigory";

import { PiForkKnifeFill } from "react-icons/pi";

export const YesterdaysCatigory = () => {
  const gain = [
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
      <div className="text-[24px] font-semibold mb-[12px]">Yesterday</div>
      <div className="flex flex-col gap-[10px]">
        {gain.map((item, index) => (
          <CatigoryType
            key={index}
            icon={item.icon}
            iCol={item.iCol}
            coor={item.col}
          />
        ))}
      </div>
    </div>
  );
};
