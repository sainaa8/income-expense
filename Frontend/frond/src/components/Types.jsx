import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { mapdataContext } from "./MapDataProvider";
import axios from "axios";

export const Types = () => {
  const { records, setRecords } = useContext(UserContext);
  const { mapdata, setMapdata } = useContext(mapdataContext);
  const [radioValue, setRadioValiu] = useState();
  const [check, setCheck] = useState(0);

  const handlerClick = async (e) => {
    const mail = localStorage.getItem("Email");
    setRadioValiu(e.target.value);
    const { data } = await axios.post("http://localhost:8000/getIcomeOnly", {
      types: e.target.value,
    });
    const dataCheckedByMail = data?.filter((el) => el.email === mail);
    setMapdata(dataCheckedByMail);

    // if (e.target.value === "oncome") {
    //   setCheck(1);
    // }
    // setCheck();
    switch (e.target.value) {
      case "income":
        setCheck(1);
        break;
      case "expence":
        setCheck(2);
    }
  };
  console.log(mapdata);
  useEffect(() => {
    setMapdata(records);
  }, [records]);
  const all = () => {
    setMapdata(records);
    setCheck(0);
  };

  return (
    <div className="workSans">
      <div>
        <div className="text-[19px] font-semibold ">Types</div>
        <div className="mt-[17px] ml-[17px]">
          <div className="flex gap-2 py-[4px]">
            <input
              checked={check === 0 ? "checked" : ""}
              onClick={() => all()}
              type="radio"
              name="type"
            />
            All
          </div>
          <div className="flex gap-2 py-[4px]">
            <input
              onClick={handlerClick}
              checked={check === 1 ? "checked" : ""}
              value="income"
              type="radio"
              name="type"
            />
            income
          </div>
          <div className="flex gap-2 py-[4px]">
            <input
              onClick={handlerClick}
              checked={check === 2 ? "checked" : ""}
              value="expence"
              type="radio"
              name="type"
            />
            expense
          </div>
        </div>
      </div>
    </div>
  );
};
