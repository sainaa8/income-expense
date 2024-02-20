export const Types = () => {
  return (
    <div className="workSans">
      <div>
        <div className="text-[19px] font-semibold ">Types</div>
        <div className="mt-[17px] ml-[17px]">
          <div className="flex gap-2 py-[4px]">
            <input type="radio" name="type" value="1" />
            All
          </div>
          <div className="flex gap-2 py-[4px]">
            <input type="radio" name="type" value="1" />
            income
          </div>
          <div className="flex gap-2 py-[4px]">
            <input type="radio" name="type" value="1" />
            expense
          </div>
        </div>
      </div>
    </div>
  );
};
