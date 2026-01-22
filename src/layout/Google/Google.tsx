import React from "react";
import SearchResult from "./components/SearchResult";

import SearchBar from "./components/SearchBar";

const Google = () => {
  return (
    <div className="h-screen flex flex-col flex-1 overflow-hidden">
      <SearchBar />
      <main className="flex-1 overflow-y-auto px-6 py-4">
        <section className="max-w-2xl ml-32">
          <div className="w-48 h-4 bg-[#e5e5e5] rounded-md mb-6" />

          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </section>
      </main>
    </div>
  );
};

export default Google;
