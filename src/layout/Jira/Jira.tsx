import React from "react";
import Header from "./components/Header";

import List from "./components/List";

const Jira = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden flex-1">
      <Header />

      <div className="flex-1 p-6 flex gap-4 overflow-x-auto bg-[#f5f5f5]">
        <List num={3} />
        <List num={4} />
        <List num={2} />
        <List num={3} />
        <List num={3} />
      </div>
    </div>
  );
};

export default Jira;
