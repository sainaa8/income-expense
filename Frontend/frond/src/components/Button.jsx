export const Button = (props) => {
  const { text, handleSubmit, type } = props;
  return (
    <button
      type={type}
      onClick={handleSubmit}
      className="w-full bg-blue-500 h-[48px] rounded-[20px] text-white flex items-center text-[20px] justify-center"
    >
      {text}
    </button>
  );
};
