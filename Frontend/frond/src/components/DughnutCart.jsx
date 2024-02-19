import { Doughnut } from "react-chartjs-2"
import { DoughnutData } from "./DughnutCard"
export const Doghnut=()=>{
    const data={
        datasets: [
            {
                label: [],
                data: [10, 8, 13, 13, 15],
                backgroundColor: [
                    "#1C64F2",
                    "#F2901C",
                    "#16BDCA",
                    "#FDBA8C",
                    "#E74694",
                  ],
                  borderWidth: [0,0,0,0,0],
                  borderColor: "rgba(255,99,132,1)",
                  borderWidth: 1,
                  hoverBorderColor: "rgba(255,99,132,1)",

            }
        ]
    }
    return <div className="workSans">
    <div className="w-[700px]  bg-white rounded-[12px]">
      <div className="py-[16px] border-b-2 border-gray-200 ">
        <div className="text-[26px] font-[600] ml-[24px]">
          Income - Expenseg
        </div>
      </div>
      <div className="w-[660px] h-[318px] flex justify-center items-center gap-6 ">

     
        <div className="w-[200px] h-[200px]">
            <Doughnut data={data}/>

        </div>
        <div className=" flex flex-col gap-4 items-center justify-between">
            <DoughnutData
              color={"#F2901C"}
              desc={"Bills"}
              ammount={"5’000’000₮"}
              percent={"15.50%"}
            />
            <DoughnutData
              color={"#16BDCA"}
              desc={"Food"}
              ammount={"5’000’000₮"}
              percent={"15.50%"}
            />
            <DoughnutData
              color={"#FDBA8C"}
              desc={"Shopping"}
              ammount={"5’000’000₮"}
              percent={"15.50%"}
            />
            <DoughnutData
              color={"#E74694"}
              desc={"Insurance"}
              ammount={"5’000’000₮"}
              percent={"15.50%"}
            />
            <DoughnutData
              color={"#1C64F2"}
              desc={"Clothing"}
              ammount={"5’000’000₮"}
              percent={"15.50%"}
            />
          </div>
    
      </div>
    </div>
  </div>
}