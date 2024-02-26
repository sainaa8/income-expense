import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const { push } = useRouter();
  const [userData, setuserData] = useState("");
  const [error, setError] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserData({ ...userData, [name]: value });
  };

  const handlerToCreate = () => {
    push("/create");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/login", userData).then((res) => {
        console.log(res.data);
        localStorage.setItem("Email", res.data);
      });

      push("/dashboard");
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
