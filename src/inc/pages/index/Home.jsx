import React from "react";
import { Text2Xl } from "../../components/commons";
import Contacts from "./Contacts";

const Home = () => {
  document.title = "Chatty";

  return (
    <div className="h-screen p-5">
      <div className="bg-white rounded-xl shadow-md dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-12">
          <div className="col-span-4 border-r border-gray-800 dark:border-gray-500">
            <Contacts />
          </div>
          <div className="col-span-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
