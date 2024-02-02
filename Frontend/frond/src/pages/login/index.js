import { Login } from "@/components/Login";
function Loginn() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/4	h-[100%] flex justify-center items-center ">
        <Login />
      </div>
      <div className="bg-blue-500 w-2/4	h-[100%]"></div>
    </div>
  );
}
export default Loginn;
