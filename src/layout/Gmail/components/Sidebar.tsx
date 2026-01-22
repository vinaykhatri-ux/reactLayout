import Box from "./Box";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-neutral-200 flex flex-col">
      <div className="p-4">
        <Box size="12" color="900" />
      </div>

      <nav className="flex-1 p-4 pt-0 flex flex-col gap-1">
        <Box size="10" color="200" />
        <Box size="10" color="100" />
        <Box size="10" color="100" />
        <Box size="10" color="100" />

        <div className="h-px bg-neutral-200 my-2"></div>

        <Box size="10" color="100" />
        <Box size="10" color="100" />
      </nav>
    </aside>
  );
};

export default Sidebar;
