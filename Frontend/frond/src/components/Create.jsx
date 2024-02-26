import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
export const Create = () => {
  const [userdata, setUserData] = useState({});
  const [error, setError] = useState();
  const { push } = useRouter();
  const handleClick = () => {
    push("/");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userdata.password !== userdata.repassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/create",
        userdata
      );
      if (data === "succsess") {
        push("/sign1");
      }
      if (typeof data === "string") {
        setError(data);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
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
          <Input
            placeholder="Name"
            name="username"
            handleChange={handleChange}
          />
          <Input placeholder="Email" name="email" handleChange={handleChange} />
          <Input
            placeholder="Password"
            name="password"
            handleChange={handleChange}
          />
          <Input
            placeholder="Re-password"
            name="repassword"
            handleChange={handleChange}
          />

          <div className="sss">
            {error && <div className="text-red-500">{error}</div>}
          </div>
          <Button
            type="submit"
            text="Sign up"
            name="mail"
            handleChange={handleChange}
          />
        </form>
        <div>
          <div className="flex gap-[10px] mt-[42px] text-[16px]">
            <div>Already have account?</div>
            <div
              className="text-blue-500 cursor-pointer active:text-blue-300"
              onClick={() => handleClick()}
            >
              Log in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
