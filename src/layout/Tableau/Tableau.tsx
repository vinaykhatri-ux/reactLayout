
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import Section from "./components/Section";

const Tableau = () => {
  return (
    <div className="h-screen flex flex-1 overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header />

        <section className="flex-1 p-6 bg-neutral-50 flex flex-col gap-6 overflow-y-auto">
          <div className="grid grid-cols-4 gap-4">
            <Card />

            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex gap-4 flex-1">
            <Section height="flex-2" width="w-32" />

            <div className="flex-1 bg-white border border-neutral-200 rounded-xl p-4 flex flex-col">
              <div className="w-24 h-6 bg-neutral-200 rounded-md mb-4"></div>

              <div className="flex-1 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-20 border-neutral-200 border-t-neutral-900"></div>
              </div>
            </div>
          </div>

          <Section height="h-64" width="w-40" />
        </section>
      </main>
    </div>
  );
};

export default Tableau;
