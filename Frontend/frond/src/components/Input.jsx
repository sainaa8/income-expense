export const Input = (props) => {
  const { placeholder } = props;
  return (
    <div>
      <div className="w-[384px] h-[48px] bg-[#F5F5F5] rounded-lg pl-[10px] flex items-center border border-[#D9D9D9] ">
        <input
          placeholder={placeholder}
          className="w-[280px] h-[43px] bg-[#F5F5F5] outline-none "
        />
      </div>
    </div>
  );
};
