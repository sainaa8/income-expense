import Image from "next/image";
import { createContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useContext } from "react";
import { AddRecordContext } from "./AddRecordProvider";

export const Header = ({ children }) => {
  const { push } = useRouter();
  const { record, setRecord } = useContext(AddRecordContext);
  const handleRecord = () => {
    setRecord(!record);
    push("/records");
  };

  const [bold, setBold] = useState(false);
  const handlepush = () => {
    push("/records");
    setBold(!bold);
  };

  const handlePushdash = () => {
    push("/");
    setRecord(false);
    setBold(!bold);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="workSans">
        <div className=" px-[20px] w-[1440px] py-[24px] flex justify-between">
          <div className="flex items-center gap-[34px]">
            <Image src="/vector.png" alt="vector" width={50} height={50} />
            <div
              onClick={() => handlePushdash()}
              className={`text-[26px] ${
                bold ? "font-semibold" : "font-normal}"
              } `}
            >
              Dashboard
            </div>
            <div
              onClick={() => handlepush()}
              className={`text-[26px] ${
                !bold ? "font-semibold" : "font-normal}"
              } `}
            >
              Records
            </div>
          </div>
          <div className="flex  gap-[24px] items-center">
            <div className="bg-blue-500 px-[15px] py-[5px] h-fit w-fit rounded-[30px] ">
              <div
                onClick={() => handleRecord()}
                className="text-white text-[30px] "
              >
                {" "}
                +Record
              </div>
            </div>
            <Image src="/place.png" alt="place" width={70} height={70} />
          </div>
        </div>
      </div>
      <div>
        <div>
          {record && (
            <div>
              <div className="w-[792px] h-[520px] bg-[#F9F9F9] rounded-[10px] fixed top-[400px]  "></div>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
