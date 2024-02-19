import { MdHomeFilled } from "react-icons/md";
import { TbCurrencyTugrik } from "react-icons/tb";

export const Records = (props) => {
  const { marginOfMoney } = props;
  return (
    <div className="py-[20px] mx-[30px] flex justify-between border-b-2 border-gray-300">
      <div className=" flex gap-[20px]">
        <div className="text-white text-[30px] rounded-full bg-blue-500 w-fit h-fit p-2  ">
          <MdHomeFilled />
        </div>
        <div className="flex flex-col ">
          <div className="text-[20px] font-[400px]">Lending & Renting</div>
          <div className="text-[12px] text-gray-400">3 hours ago</div>
        </div>
      </div>
      <div>
        <div className="text-[29px] text-green-600 font-semibold">
          {marginOfMoney}
        </div>
      </div>
    </div>
  );
};

export const LastRecord = () => {
  const margin = [
    { m: "-1,000₮" },
    { m: "-1,000₮" },
    { m: "-1,000₮" },
    { m: "-1,000₮" },
    { m: "-1,000₮" },
  ];
  return (
    <div className="workSans">
      <div className="bg-white rounded-lg">
        <div className="border-b-2 pb-2 py-[16px] border-gray-300">
          <div className="text-[26px] ml-[30px] font-semibold">
            Last Records
          </div>
        </div>
        <div>
          {margin.map((el, index) => (
            <div key={index}>
              <Records marginOfMoney={el.m} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
