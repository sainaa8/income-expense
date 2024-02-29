import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { useContext } from "react";
// import { IncomeExpenceContext } from "./ExpenceIncomeData";
import { UserContext } from "./UserProvider";

export const Login = () => {
  // const { records, setRecords } = ueContext);seContext(IncomeExpenc
  const { userEmail } = useContext(UserContext);

  const { push } = useRouter();
  const [userData, setuserData] = useState({});
  const [error, setError] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserData({ ...userData, [name]: value });
  };

  const handlerToCreate = () => {
    push("/create");
  };

  if (userEmail) {
    push("/");
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        userData
      );
      console.log(data);
      localStorage.setItem("Tokenn", data.token);
      localStorage.setItem("Email", data.user.email);
      localStorage.setItem("UserCash", data.user.cash);
      localStorage.setItem("name", data.user.username);

      push("/");
      location.reload();
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="workSans">
      <div className="flex flex-col items-center   w-fit">
        <div className="flex items-center gap-2 font-bold mb-[40px]">
          <Image src="/Vector.png" width={23} height={23} alt="logo" />
          GELD
        </div>
        <div className="gap-[8px] flex flex-col items-center">
          <div className="text-2xl font-bold text-[24px]">Welcome Back</div>
          <div className="text-sm">Welcome back, Please enter your details</div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[16px] mt-[40px]"
        >
          <Input name="email" placeholder="Email" handleChange={handleChange} />
          <Input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          <div className=" sss ">
            {" "}
            {error && <div className="text-red-500">{error}</div>}
          </div>
          <Button text="Login" type="submit" />
        </form>
        <div>
          <div className="flex gap-[8px] mt-[42px] text-[16px]">
            <div>Don’t have account?</div>
            <div
              onClick={() => handlerToCreate()}
              className="text-blue-500 cursor-pointer active:text-blue-300"
            >
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
