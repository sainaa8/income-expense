import Image from "next/image";
import { createContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useContext } from "react";
import { AddRecordContext } from "./AddRecordProvider";

import { AddRecord } from "./AddRecord";
import { LastCatigory } from "./LASTaddCatigory";

import { AddCatigoryContext } from "./AddCatiProvider";

export const Header = () => {
  const { push } = useRouter();
  const [bold, setBold] = useState(true);

  const { record, setRecord } = useContext(AddRecordContext);
  const { addCati, setAddCati } = useContext(AddCatigoryContext);

  const handleRecord = () => {
    setBold(false);
    setRecord(!record);
    push("/records");
  };

  const handlepush = () => {
    setBold(false);
    push("/records");
  };

  const handlePushdash = () => {
    setBold(true);
    push("/dashboard");
    setRecord(false);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="workSans">
        {record && (
          <div onClick={() => setRecord(false)}>
            <div className="w-screen h-screen left-0 bg-black opacity-50 fixed "></div>
          </div>
        )}
        {!addCati && (
          <div onClick={() => setAddCati(true)}>
            <div className="w-screen h-screen left-0 bg-black opacity-50 fixed "></div>
          </div>
        )}
        <div className=" px-[20px] w-[1440px] py-[24px] flex justify-between ">
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
              <div>
                <AddRecord />
              </div>
            </div>
          )}

          {!addCati && (
            <div>
              <div>
                <LastCatigory />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
