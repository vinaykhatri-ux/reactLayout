import { ChatScreen } from "./components/ChatScreen";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const Slack = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Topbar />

        <ChatScreen />

        <div className="h-20 border-t border-[#e5e5e5] p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f5f5f5] rounded-md" />
          <div className="flex-1 h-12 bg-[#f5f5f5] rounded-full" />
          <div className="w-10 h-10 bg-[#171717] rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default Slack;
