import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import { inExContext } from "./inExProvider";
// import { useContext } from "react";

const dataBar = {
  // const { inc } = useContext(inExContext);
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Income",
      backgroundColor: "#84CC16",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [3000000, 5000000, 2440000, 1040000, 1500000, 1850000, 0],
    },
    {
      label: "Expense",
      backgroundColor: "#F97316",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      borderRadius: 20,
      barThickness: 15,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [2300000, 2100000, 2140000, 940000, 1000000, 1150000, 0],
    },
  ],
};

export const BarChartComp = () => {
  return (
    <div className="w-full h-full">
      <Bar data={dataBar} width={100} height={50} />
    </div>
  );
};
