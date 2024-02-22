import { Slider } from "@/components/ui/slider";
import { useState, createContext } from "react";

export const AmountRangeContext = createContext();

export const AmountRange = () => {
  const [value, setValue] = useState([0, 1000]);

  const handleChange = (el) => {
    setValue(el);
  };

  return (
    <div className="workSans">
      <div className="w-[380px] h-[190px] flex flex-col justify-between bg-white rounded-lg gap-[20px] ">
        <div className="font-semibold text-[20px]">AmountRange</div>

        <div className="flex justify-between">
          <input
            type="number"
            value={value[0]}
            className="w-[155px] h-[68px] bg-[#F5F5F5] rounded-lg flex justify-between items-center px-[10px] text-[24px] gap-[24px]"
          />

          <input
            type="number"
            value={value[1]}
            className="w-[155px] h-[68px] bg-[#F5F5F5] rounded-lg flex justify-between items-center px-[10px] text-[24px] gap-[24px]"
          />
        </div>
        <div>
          <Slider
            // defaultValue={[0, 500]}
            min={0}
            max={1000}
            step={1}
            onValueChange={(e) => handleChange(e)}
            value={value}
          />
        </div>
        <siv className="w-[100%] flex justify-between">
          <div>{value[0]}</div>
          <div>{value[1]}</div>
        </siv>
      </div>
    </div>
  );
};
