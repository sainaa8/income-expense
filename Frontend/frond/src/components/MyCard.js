import Image from "next/image";
export const MyCard = (props) => {
  const { allMyMoney } = props;
  return (
    <div>
      <div className="relative">
        <Image src="/card1.png" alt="vector" width={456} height={220} />
        <div className="absolute top-[32px] left-[32px] index-10 flex gap-[10px]">
          <Image
            src="/lo.png"
            alt="vector "
            width={20}
            height={10}
            className="text-white"
          />
          <div className="text-white text-[24px] font-semibold">Geld</div>
        </div>
        <div className="absolute bottom-[32px] left-[32px] index-10 flex flex-col gap-[3px] index-10">
          <div className="text-[16px] text-slate-200 font-normal">Cash</div>
          <div className="text-white text-[24px] font-semibold">
            {allMyMoney} ₮
          </div>
        </div>
      </div>
    </div>
  );
};
