import { BarChartComp } from "./BarChartdata";
export const BarChart = (props) => {
  const { sumInc, sumexp } = props;

  return (
    <div className="workSans">
      <div className="w-[700px]  bg-white rounded-[12px]">
        <div className="py-[16px] border-b-2 border-gray-200 ">
          <div className="text-[26px] font-[600] ml-[24px]">
            Income - Expense
          </div>
        </div>
        <div className="w-[660px] h-[318px] flex justify-center items-center ">
          <BarChartComp sumInc={sumInc} sumexp={sumexp} />
        </div>
      </div>
    </div>
  );
};
