import Image from "next/image";
import { Steps } from "./Steps";
import { FaMoneyBill } from "react-icons/fa";
import { useRouter } from "next/router";
export const SignUpFirst = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/sign2");
  };
  return (
    <div className="sss mt-[100px] flex flex-col items-center gap-[170px]">
      <Steps />
      <div className="flex flex-col items-center gap-[20px]">
        <div className="text-[45px] w-fit px-[10px] py-[10px] text-white bg-blue-500 rounded-full">
          <FaMoneyBill />
        </div>
        <div className="text-[24px] font-bold ">
          <div className="workSans">Select base currency</div>
        </div>
        <div className="workSans">
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px] ">
              <select className="select w-[500px] h-[64px]  bg-gray-100 outline-none text-[20px]">
                <option selected>MNT - Mongolian Tugrik</option>
                <option>USD - United States Dollar</option>
                <option>EUR - Euro</option>
                <option>JPY - Japanese Yen</option>
                <option>GBP - British Pound</option>
                <option>CNY - Chinese Yuan</option>
              </select>
              <div className="text-[14px] text-gray-500 w-[500px] flex justify-center">
                Your base currency should be the one you use most often. All
                transaction in other currencies will be calculated based on this
                one
              </div>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-blue-500 w-[500px] h-[64px] text-white text-[20px] rounded-3xl"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
