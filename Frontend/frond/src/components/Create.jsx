import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
export const Create = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/login");
  };
  return (
    <div className="flex flex-col items-center   w-fit">
      <div className="flex items-center gap-2 font-bold mb-[40px]">
        <Image src="/Vector.png" width={23} height={23} />
        GELD
      </div>
      <div className="gap-[8px] flex flex-col items-center">
        <div className="text-2xl font-bold text-[24px]">Welcome Back</div>
        <div className="text-sm">Welcome back, Please enter your details</div>
      </div>
      <div className="flex flex-col gap-[16px] mt-[40px]">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Re-password" />
        <Button text="Sign up" />
      </div>
      <div>
        <div oncl className="flex gap-[10px] mt-[42px] text-[16px]">
          <div>Already have account?</div>
          <div className="text-blue-500">Log in</div>
        </div>
      </div>
    </div>
  );
};
