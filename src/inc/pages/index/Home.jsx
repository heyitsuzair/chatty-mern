import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../config/routes";
import ChatBox from "./ChatBox";
import Contacts from "./Contacts";

const Home = () => {
  document.title = "Chatty";

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("chatty-user");
    /**
     * Protected Route
     */
    if (!user) {
      navigate(RoutePaths.login);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen lg:p-5">
      <div className="bg-white rounded-xl shadow-md dark:border h-[94vh] dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 border-r border-indigo-500">
            <Contacts />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
