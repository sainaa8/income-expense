import { Doughnut } from "react-chartjs-2";
import { DoughnutData } from "./DughnutCard";

import { UserContext } from "./UserProvider";
import { useContext } from "react";
import { Login } from "./Login";

export const Doghnut = () => {
  const { records } = useContext(UserContext);
  console.log(records);
  let foodArrey = [];
  const food = records?.filter((el) => el.category === "Food");
  console.log(food);
  food?.forEach((el) => foodArrey.push(Number(el.amount)));
  const foodSum = foodArrey.reduce((a, b) => a + b, 0);
  const foodMonay = foodSum.toLocaleString();

  let homeArrey = [];
  const home = records?.filter((el) => el.category === "Home");
  home?.forEach((el) => homeArrey.push(Number(el.amount)));
  const homeSum = homeArrey.reduce((a, b) => a + b, 0);
  const homeMoney = homeSum.toLocaleString();

  let drinkArrey = [];
  const drink = records?.filter((el) => el.category === "Drink");
  drink?.forEach((el) => drinkArrey.push(Number(el.amount)));
  const drinkSum = drinkArrey.reduce((a, b) => a + b, 0);
  const drinkMoney = drinkSum.toLocaleString();

  let giftArrey = [];
  const gift = records?.filter((el) => el.category === "Gift");
  gift?.forEach((el) => giftArrey.push(Number(el.amount)));
  const giftSum = giftArrey.reduce((a, b) => a + b, 0);
  const giftMoney = giftSum.toLocaleString();

  let ShoppingArrey = [];
  const Shopping = records?.filter((el) => el.category === "Shopping");
  console.log(Shopping);
  Shopping?.forEach((el) => ShoppingArrey.push(Number(el.amount)));
  const ShoppingSum = ShoppingArrey.reduce((a, b) => a + b, 0);
  const ShoppingMoney = ShoppingSum.toLocaleString();

  const data = {
    datasets: [
      {
        label: [],
        data: [foodSum, homeSum, ShoppingSum, giftSum, drinkSum],
        backgroundColor: [
          "#1C64F2",
          "#F2901C",
          "#16BDCA",
          "#FDBA8C",
          "#E74694",
        ],
        borderWidth: [0, 0, 0, 0, 0],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBorderColor: "rgba(255,99,132,1)",
      },
    ],
  };
  return (
    <div className="workSans">
      <div className="w-[700px]  bg-white rounded-[12px]">
        <div className="py-[16px] border-b-2 border-gray-200 ">
          <div className="text-[26px] font-[600] ml-[24px]">Expense</div>
        </div>
        <div className="w-[660px] h-[318px] flex justify-center items-center gap-6 ">
          <div className="w-[200px] h-[200px]">
            <Doughnut data={data} />
          </div>
          <div className=" flex flex-col gap-4 items-center justify-between">
            <DoughnutData color={"#F2901C"} desc={"Home"} ammount={homeMoney} />
            <DoughnutData color={"#16BDCA"} desc={"Food"} ammount={foodMonay} />
            <DoughnutData
              color={"#FDBA8C"}
              desc={"Shopping"}
              ammount={ShoppingMoney}
            />
            <DoughnutData color={"#E74694"} desc={"Gift"} ammount={giftMoney} />
            <DoughnutData
              color={"#1C64F2"}
              desc={"Drink"}
              ammount={drinkMoney}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
