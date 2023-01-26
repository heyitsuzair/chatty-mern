import React from "react";
import Contacts from "./Contacts";

const Home = () => {
  document.title = "Chatty";

  return (
    <div className="h-screen p-5">
      <div className="bg-white rounded-xl shadow-md dark:border h-[94vh] dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 border-r border-gray-800 dark:border-gray-500">
            <Contacts />
          </div>
          <div className="col-span-12 lg:col-span-8">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
