import Image from "next/image";
import { MyCard } from "./MyCard";
import { MyIncome } from "./MyIncome";
import { LastRecord } from "./LastRecord";
import { BarChart } from "./BarChart";
import { Doghnut } from "./DughnutCart";
import { Header } from "./Header";

import { UserContext } from "./UserProvider";
import { useContext, useEffect } from "react";

export const DashboardPage = () => {
  const { userEmail } = useContext(UserContext);
  // console.log(userEmail);
  // useEffect(() => {
  //   // location.reload();
  // }, [userEmail]);
  return (
    <div className="flex flex-col items-center ">
      <div>
        <Header />
      </div>
      <div className="workSans">
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
