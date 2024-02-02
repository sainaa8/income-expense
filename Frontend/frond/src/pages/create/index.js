import { Create } from "@/components/Create";
function CreateFage() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/4	h-[100%] flex justify-center items-center ">
        <Create />
      </div>
      <div className="bg-blue-500 w-2/4	h-[100%]"></div>
    </div>
  );
}
export default CreateFage;
