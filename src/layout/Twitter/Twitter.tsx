import RightPanel from "./components/RightPanel";
import Sidebar from "./components/Sidebar";

const Twitter = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />

        <section className="flex flex-1 flex-col border-r border-neutral-200">
          <div className="h-14 border-b border-neutral-200"></div>

          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="bg-neutral-100 border border-neutral-200 rounded-md h-40"></div>
            <div className="bg-neutral-100 border border-neutral-200 rounded-md h-56"></div>
            <div className="bg-neutral-100 border border-neutral-200 rounded-md h-40"></div>
          </div>
        </section>

        <RightPanel/>
    </div>
  );
};

export default Twitter;
