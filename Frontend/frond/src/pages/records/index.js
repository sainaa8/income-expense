import { Types } from "@/components/Types";
import { Category } from "@/components/Category";
import { AmountRange } from "@/components/Amount Range";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { TodaysCatigory } from "@/components/TodaysCatigory";
import { YesterdaysCatigory } from "@/components/YesterdaysCatigory";

import { useContext, useEffect } from "react";
import { AddRecordContext } from "@/components/AddRecordProvider";
import { UserContext } from "@/components/UserProvider";

import { Header } from "@/components/Header";

import axios from "axios";

function Record() {
  const { record, setRecord } = useContext(AddRecordContext);
  const { userEmail, records } = useContext(UserContext);
  console.log(userEmail);
  console.log(records);
  const handleRecord = () => {
    setRecord(!record);
  };

  // useEffect(() => {
  //   const userData = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:8000/getIncomeExpence",
  //         userEmail
  //       );
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   userData();
  // }, []);
  //

  return (
    <div className="workSans">
      <div className="flex flex-col items-center">
        <div>
          <Header />
        </div>
        <div className="flex gap-[20px] ">
          <div className="px-[20px] py-[33px] w-[1440px] bg-gray-100   rounded-[10px] flex gap-[20px] ">
            {/* <div className="w-full h-full bg-gray-300 opacity-50	 absolute"></div> */}
            <div className="bg-white py-[20px] w-[432px] rounded-[10px] border border-gray-200 flex flex-col gap-[24px]">
              <div className="bg-white rounded-[10px] w-[429px] px-[16px] py-[24px]">
                <div className="text-[34px] font-semibold mb-[24px]">
                  Record
                </div>
                <button
                  onClick={() => handleRecord()}
                  className="bg-blue-500 text-white rounded-[20px] w-full h-[40px] sa"
                >
                  +Add
                </button>
              </div>
              <div className="w-[393px] ml-[17px] bg-gray-100 rounded-[10px] px-[16px] py-[14px]">
                <input
                  className="outline-none border-none  bg-gray-100"
                  placeholder="Search"
                />
              </div>
              <div className="ml-[17px] mr-[17px] flex flex-col gap-[24px]">
                <Types />
                <Category />
                <AmountRange />
              </div>
            </div>
            <div className="mt-[20px] flex flex-col gap-[24px]">
              <div className="flex justify-between w-[950px]">
                <div className="text-[29px] flex items-center gap-[20px]">
                  <div className="bg-gray-200 rounded-[10px] px-[16px] py-[14px]">
                    <IoIosArrowBack />
                  </div>
                  Last 30 Days
                  <div className="bg-gray-200 rounded-[10px] px-[16px] py-[14px] ">
                    <IoIosArrowForward />
                  </div>
                </div>
                <div className="text-[29px] font-semibold bg-white rounded-[10px]  py-[14px] px-[40px] border border-gray-300">
                  Newest first
                </div>
              </div>
              <div className="flex justify-between w-[950px] text-[24px] bg-white rounded-[10px] py-[14px] px-[25px] border border-gray-300">
                <div className="flex gap-[25px] items-center">
                  <input
                    type="checkbox"
                    className="w-[30px] h-[30px] border  "
                  />
                  <div>Select all</div>
                </div>

                <div className="text-gray-400">-35.000</div>
              </div>
              <div>
                <TodaysCatigory records={records} />
              </div>
              <div>
                <YesterdaysCatigory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Record;
