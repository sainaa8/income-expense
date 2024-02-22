import { Login } from "@/components/Login";
// import { Loading } from "@/components/Loading";
// import { SingUpSecond } from "@/components/SingUpSecond";
import { SignUpFirst } from "@/components/SignUpFirst";
import { DashboardPage } from "@/components/DashboardPage";
export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/4	h-[100%] flex justify-center items-center ">
        <Login />
      </div>
      <div className="bg-blue-500 w-2/4	h-[100%]"></div>
    </div>
  );
}
