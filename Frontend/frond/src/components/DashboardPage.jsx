import Image from "next/image";
import { MyCard } from "./MyCard";
import { MyIncome } from "./MyIncome";
import { LastRecord } from "./LastRecord";
import { BarChart } from "./BarChart";
import { Doghnut } from "./DughnutCart";
import { Header } from "./Header";

import { UserContext } from "./UserProvider";
import { useContext } from "react";
import { useState } from "react";
// import { inExContext } from "./inExProvider";

export const DashboardPage = () => {
  const { records, cash } = useContext(UserContext);
  // const { inc, setInc } = useContext(inExContext);
  console.log(cash);

  let ex = [];
  let incom = [];

  console.log(records);
  // console.log(records[records?.length - 1]);
  const income = records?.filter((item) => item.types === "income");
  const expense = records?.filter((item) => item.types === "expence");
  console.log(income);
  console.log(expense);

  for (let i = 0; i < expense?.length; i++) {
    const amount = Number(expense[i].amount);
    ex.push(amount);
  }
  const sumexp = ex.reduce((a, b) => a + b, 0);
  const moneyExp = sumexp.toLocaleString();

  for (let i = 0; i < income?.length; i++) {
    const amountInc = Number(income[i].amount);
    incom.push(amountInc);
  }
  const sumInc = incom.reduce((a, b) => a + b, 0);
  const moneyInc = sumInc.toLocaleString();
  //
  // console.log(cash - sumexp + sumInc);
  let myCash = cash - sumexp + sumInc;
  console.log(myCash);
  const allMyMoney = myCash.toLocaleString();
  console.log(allMyMoney);
  return (
    <div className="flex flex-col items-center ">
      <div>
        <Header />
      </div>
      <div className="workSans">
        <div className="px-[20px] py-[33px] flex flex-col gap-[24px]  bg-gray-100">
          <div className="flex gap-[30px]">
            <MyCard allMyMoney={allMyMoney} />
            <MyIncome
              header="My Income"
              decs="Your income amount"
              dotColor="text-green-500"
              amount={moneyInc}
            />
            <MyIncome
              header="My Expense"
              decs="Your expense amount"
              dotColor="text-blue-500"
              amount={moneyExp}
            />
          </div>
          <div className="flex gap-[30px]">
            <BarChart sumInc={sumInc} sumexp={sumexp} />
            <Doghnut />
          </div>
          <div>
            <LastRecord records={records} />
          </div>
        </div>
      </div>
    </div>
  );
};
