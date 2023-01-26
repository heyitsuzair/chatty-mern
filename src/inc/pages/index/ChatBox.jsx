import React, { useState } from "react";
import { InputIconned, Text2Xl, TextSm } from "../../components/commons";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBox = () => {
  const [inputMessage, setInputMessage] = useState("");

  /**
   * @function onMessageSubmit
   *
   * Triggers When Someone Add A New Message
   *
   * Call The API to send a new message
   */
  const onMessageSubmit = (e) => {
    e.preventDefault();
    alert("msg Added");
  };

  /**
   * Props For Type Message Input
   */
  const msgInput = {
    inputProps: {
      placeholder: "Type Message...",
      name: "message",
      value: inputMessage,
      onChange: (e) => setInputMessage(e.target.value),
    },
    icon: "fa fa-paper-plane",
  };

  return (
    <div>
      <header className="p-4 border-b border-indigo-500">
        <Text2Xl
          text="Muhammad Uzair"
          classes="leading-tight text-center tracking-tight font-semibold !text-gray-900 dark:!text-white"
        />
        <TextSm
          text="Active 6:21 PM, Sun, Oct 17, 2021"
          classes={`leading-tight tracking-tight font-medium !text-black dark:!text-gray-500 mt-2 text-center`}
        />
      </header>
      <ScrollToBottom
        className="chats h-[86.5vh] md:h-[85vh] lg:h-[69vh] overflow-x-hidden"
        followButtonClassName="hidden"
      >
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-start">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-left w-auto m-2 rounded-full p-2.5 lg:p-5 bg-gray-500 dark:bg-gray-700 tracking-tight font-semibold"
          />
        </div>
        <div className="flex items-start justify-end">
          <TextSm
            text="Hey. How Are You Doing. I am Good"
            classes="leading-tight text-right w-auto m-2 rounded-full p-2.5 lg:p-5 bg-indigo-600 tracking-tight font-semibold"
          />
        </div>
      </ScrollToBottom>
      <div className="send-message-box">
        <form onSubmit={onMessageSubmit}>
          <InputIconned {...msgInput} />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
