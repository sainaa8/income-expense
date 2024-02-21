import { MdClear } from "react-icons/md";
export const LastCatigory = () => {
  return (
    <div className="w-[792px] bg-white py-[20px] rounded-[10px] fixed index-200 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <div className="w-[100%]  text-[24px] font-semibold ">
        <div className="px-[24px] flex justify-between py-[20px] border-b border-black">
          Add Category
          <div className="text-[30px] cursor-pointer">
            <MdClear />
          </div>
        </div>
      </div>
    </div>
  );
};
