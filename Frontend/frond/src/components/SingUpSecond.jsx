import { Steps } from "./Steps";
import { GiTwoCoins } from "react-icons/gi";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { Login } from "./Login";

export const SingUpSecond = (props) => {
  const [upCash, setUpCash] = useState("");
  const { stage = 2 } = props;
  const { push } = useRouter();

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/userUpdate", {
        cash: upCash,
      });
      console.log(data);
      push("/sign3");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col mt-[100px] items-center gap-[170px] ">
      <Steps step={stage} />
      <div className="flex flex-col items-center gap-[30px] ">
        <div className="w-fit h-fit px-[10px] py-[10px] bg-blue-600 rounded-full text-white flex items-center justify-center text-[45px] ">
          <GiTwoCoins />
        </div>
        <div className="text-[24px] font-bold ">
          <div className="workSans">Set up your cash Balance</div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="w-[500px] h-[64px] bg-gray-100 pl-[20px] text-[20px] flex items-center rounded-2xl">
            <input
              onChange={(el) => setUpCash(el.target.value)}
              type="number"
              placeholder="Cash Balance"
              className="bg-gray-100  outline-none"
            />
          </div>{" "}
          <div className="text-[14px] text-gray-500 w-[500px] ">
            How much cash do you have in your wallet?
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
  );
};
