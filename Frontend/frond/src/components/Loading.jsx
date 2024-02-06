import { AiOutlineLoading } from "react-icons/ai";
import daisyui from "daisyui";
import Image from "next/image";
export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-[20%] ">
      <div className="flex  items-center justify-center gap-5">
        <Image src="/vector.png" width={70} height={70} alt="loading" />
        <div className="text-3xl font-bold">Geld</div>
      </div>
      {/* <span className="loading loading-dots loading-lg"></span> */}
      <div className="animate-spin">
        <Image src="/load.png" width={50} height={50} alt="loading" />
      </div>
      <div className="text-[16px] font-bold">Түр хүлээнэ үү...</div>
    </div>
  );
};
