
import Mail from "./components/Mail";
import Sidebar from "./components/Sidebar";
const Gmail = () => {
  return (
    <div className="h-screen flex">
      <Sidebar/>

      <section className="flex-1 flex flex-col">
        <div className="h-14 border-b border-neutral-200 flex items-center px-4 gap-2">
          <div className="w-8 h-8 bg-neutral-200 rounded-md"></div>
          <div className="w-8 h-8 bg-neutral-200 rounded-md"></div>

          <div className="flex-1"></div>

          <div className="w-64 h-8 bg-neutral-100 rounded-md"></div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <Mail />
          <Mail />

          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />

          
        </div>
      </section>
    </div>
  );
};

export default Gmail;
