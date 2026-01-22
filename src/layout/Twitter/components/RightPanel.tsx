import Box from "./Box";

const RightPanel = () => {
  return (
    <aside className="w-80 p-4 flex flex-col gap-4">
      <Box size="10" color="100" borderRound="full" />
      <Box size="48" color="100" borderRound="xl" />
      <Box size="64" color="100" borderRound="xl" />
    </aside>
  );
};

export default RightPanel;
