import { Steps } from "./Steps";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/router";
export const SingUpPinish = (props) => {
  const { stage = 3 } = props;
  const { push } = useRouter();
  const handleClick = () => {
    push("/login");
  };
  return (
    <div className="flex flex-col mt-[100px] items-center gap-[170px]">
      <Steps step={stage} />
      <div className="flex flex-col items-center gap-[20px]">
        <div className="w-fit h-fit px-[10px] py-[10px] bg-blue-600 rounded-full text-white flex items-center justify-center text-[45px] ">
          <FaCheck />
        </div>
        <div className="text-[24px] font-bold ">Good Job!</div>{" "}
        <div className="text-[16px] text-center w-[450px]">
          Your very first account has been created. Now continue to dashboard
          and start tracking
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
  );
};
