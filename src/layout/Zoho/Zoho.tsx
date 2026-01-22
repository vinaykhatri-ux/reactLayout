import React from "react";

import Box from "./components/Box";
import Row from "./components/Row";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

const Zoho = () => {
  return (
    <div className="h-screen flex flex-col flex-1 overflow-hidden">
      <div className="h-14 flex items-center gap-4 px-6 border-b border-gray-200">
        <Box width="40" height="6" bgColor="200" />
        <div className="flex-1" />
        <Box width="32" height="8" bgColor="100" />
        <Box width="24" height="8" bgColor="900" />
      </div>

      <Filter />

      <div className="flex-1 overflow-auto">
        <div className="min-w-full">
          <div className="h-10 flex items-center px-4 gap-4 bg-gray-100 border-b border-gray-200 sticky top-0 z-10">
            <Box width="12" height="5" bgColor="200" />
            <Box width="48" height="5" bgColor="200" />
            <Box width="40" height="5" bgColor="200" />
            <Box width="32" height="5" bgColor="200" />
            <Box width="32" height="5" bgColor="200" />
            <Box width="24" height="5" bgColor="200" />
            <div className="flex-1" />
            <div className="w-20 h-5 bg-gray-200 rounded-md" />
          </div>

          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />

          <Row />
          <Row />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Zoho;
