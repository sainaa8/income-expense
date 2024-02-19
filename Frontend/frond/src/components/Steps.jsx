import Image from "next/image";
import daisyui from "daisyui";
export const Steps = (props) => {
  const { step = 1 } = props;
  return (
    <div className=" w-fit flex flex-col items-center gap-[50px]">
      <div className="flex gap-4 items-center">
         
        <div className="text-[30px] font-bold">Geld</div>
      </div>
      <div>
        <ul className="steps w-[400px] ">
          <li className={`step step-primary`}>Currency</li>
          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Balance</li>
          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Finish</li>
        </ul>
      </div>
    </div>
  );
};
