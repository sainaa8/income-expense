import Image from "next/image";
import { MyCard } from "./MyCard";
import { MyIncome } from "./MyIncome";
import { LastRecord } from "./LastRecord";
import { BarChart } from "./BarChart";
import { Doghnut } from "./DughnutCart";
export const DashboardPage = () => {
  return (
    <div className="flex justify-center">
      <div className="workSans">
        <div className=" px-[20px] w-[1440px] py-[24px] flex justify-between">
          <div className="flex items-center gap-[34px]">
            <Image src="/vector.png" alt="vector" width={50} height={50} />
            <div className="text-[26px] font-semibold ">Dashboard</div>
            <div className="text-[26px] font-normal">Records</div>
          </div>
          <div className="flex  gap-[24px] items-center">
            <div className="bg-blue-500 px-[15px] py-[5px] h-fit w-fit rounded-[30px] ">
              <div className="text-white text-[30px] "> +Record</div>
            </div>
            <Image src="/place.png" alt="place" width={70} height={70} />
          </div>
        </div>
        <div className="px-[20px] py-[33px] flex flex-col gap-[24px]  bg-gray-100">
          <div className="flex gap-[30px]">
            <MyCard />
            <MyIncome />
            <MyIncome />
          </div>
          <div className="flex gap-[30px]">
            <BarChart />
            <Doghnut />
          </div>
          <div>
            <LastRecord />
          </div>
        </div>
      </div>
    </div>
  );
};
