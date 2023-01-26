import React from "react";
import { PlainButton, Text2Xl } from "../../components/commons";

const Contacts = () => {
  return (
    <div className="contacts">
      <header className="flex items-center justify-between p-7">
        <Text2Xl
          text="Chats"
          classes="leading-tight tracking-tight font-bold !text-gray-900 dark:!text-white"
        />
        <PlainButton
          icon="fa fa-plus -ml-2"
          textColor="text-indigo-700 dark:text-white"
          onClick={() => alert("add contact")}
          buttonColor="dark:bg-indigo-600 dark:hover:bg-indigo-700 bg-indigo-200 hover:bg-indigo-400"
          isSquare
          text=""
        />
      </header>
    </div>
  );
};

export default Contacts;
