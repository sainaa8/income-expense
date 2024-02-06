export const Input = (props) => {
  const { placeholder, handleChange, name, type } = props;
  return (
    <div>
      <div className="w-[384px] h-[48px] bg-[#F5F5F5] rounded-lg pl-[10px] flex items-center border border-[#D9D9D9] ">
        <input
          type={type}
          name={name}
          onChange={handleChange}
          // onChangevent={handleCreate}
          placeholder={placeholder}
          className="w-[280px] h-[43px] bg-[#F5F5F5] outline-none "
        />
      </div>
    </div>
  );
};
