export const Button = (props) => {
  const { text } = props;
  return (
    <div className="w-full bg-blue-500 h-[48px] rounded-[20px] text-white flex items-center text-[20px] justify-center">
      {text}
    </div>
  );
};
