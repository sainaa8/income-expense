import { MdClear } from "react-icons/md";
import { ARCatigory } from "./ARCatigory";
import { ADdate } from "./ADdate&time";
import { useState } from "react";
import { useContext } from "react";
import { AddRecordContext } from "./AddRecordProvider";

export const AddRecord = () => {
  const { record, setRecord } = useContext(AddRecordContext);
  const [main, setMain] = useState(true);

  const handleRecord = () => {
    setRecord(false);
    console.log("asd");
  };

  const handlerMainGreen = () => {
    setMain(false);
  };
  const handlerMainBlue = () => {
    setMain(true);
  };
  // const
  const [recordData, setRecordData] = useState({});

  const handleChange = (el) => {
    const { name, value } = el.target;
    setRecordData({ ...recordData, [name]: value });
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    console.log(recordData);
    // console.log(asd);
  };

  return (
    <div className="workSans">
      <div className="w-[792px] bg-white  rounded-[10px] fixed index-200 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="w-[100%]  text-[24px] font-semibold ">
          <div className="px-[24px] flex justify-between py-[20px] border-b border-black">
            Add record
            <div onClick={handleRecord} className="text-[30px] cursor-pointer">
              <MdClear />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-[100%] flex">
          <div className="w-[50%] px-[24px] py-[20px]">
            <div className="w-[348px] h-[50px] rounded-[100px] bg-[#F5F5F5] flex">
              <div
                onClick={handlerMainBlue}
                className={`w-[50%] flex justify-center items-center ${
                  main ? "bg-blue-700 text-white" : "bg-[#F5F5F5]"
                }  rounded-[100px]`}
              >
                Expense
              </div>
              <div
                onClick={handlerMainGreen}
                className={`w-[50%] flex justify-center items-center rounded-[100px] ${
                  !main ? "bg-[#16A34A] text-white" : "bg-[#F5F5F5]"
                }`}
              >
                Income
              </div>
            </div>
            <div className="w-[348px] h-[76px] mt-[20px] rounded-[5px] bg-[#F5F5F5] flex items-center border border-gray-300">
              <div className="ml-[20px]">
                Amount
                <div className="text-gray-500 flex gap-[10px]">
                  ₮
                  <input
                    onChange={handleChange}
                    name="amount"
                    type="text"
                    className="outline-none bg-[#F5F5F5]"
                    placeholder="000,00"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <ARCatigory
                main={main}
                // name="category"
                // handleChange={handleChange}
              />
            </div>
            <div className="mt-[20px]">
              <ADdate />
            </div>
            <div
              className={` ${
                main ? "bg-blue-700 " : "bg-[#16A34A]"
              } mt-[20px] rounded-[100px] flex justify-center items-center h-[40px] text-white`}
            >
              <button>Add Record</button>
            </div>
          </div>
          <div className="w-[50%] px-[24px] py-[20px]">
            <div>
              <div className="mb-[8px]">Payee</div>
              <div className=" w-[348px] h-[48px] bg-[#F5F5F5] px-[16px] rounded-[5px] border border-gray-300 flex items-center">
                <input
                  onChange={handleChange}
                  name="payee"
                  type="text"
                  placeholder="Write here"
                  className="h-[30px] bg-[#F5F5F5] outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <div className="mb-[8px] ">Note</div>
              <div className="w-[348px] h-[300px] bg-[#F5F5F5] py-[16px] px-[16px] rounded-[5px] border border-gray-300 flex items-center justify-center ]">
                <textarea
                  onChange={handleChange}
                  name="note"
                  type="text"
                  rows="10"
                  cols="30"
                  placeholder="Write here"
                  className="bg-[#F5F5F5] w-[310px] h-[270px] outline-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
