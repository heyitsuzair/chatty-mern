import React from "react";
import { TextLg, TextSm } from "..";

const ContactItem = ({ isActive, messages, contact }) => {
  return (
    <div
      className={`contact-item ${
        isActive
          ? "dark:bg-indigo-800 bg-indigo-500"
          : "dark:bg-indigo-500 bg-indigo-300"
      }  hover:dark:bg-indigo-700 hover:bg-indigo-400 cursor-pointer transition-all ease-in-out py-5 px-3 rounded-lg`}
    >
      <div>
        <TextLg
          text={contact?.friend_id.username}
          classes="leading-tight tracking-tight font-medium !text-gray-900 dark:!text-white"
        />
      </div>
      <div className="mt-4 flex justify-between gap-4 items-center">
        {messages?.length > 0 ? (
          messages.map((message, index) => {
            if (index === messages.length - 1) {
              return (
                <div key={message._id}>
                  <TextSm
                    text="Hey! Whatsup. How are you...."
                    classes={`leading-tight tracking-tight ${
                      message.seen
                        ? "!text-gray-900 dark:!text-gray-400"
                        : "font-bold !text-black dark:!text-white"
                    }`}
                  />
                  <TextSm
                    text="few seconds ago"
                    classes={`leading-tight tracking-tight ${
                      message.seen
                        ? "!text-gray-900 dark:!text-gray-400"
                        : "font-bold !text-black dark:!text-white"
                    }`}
                  />
                </div>
              );
            }
          })
        ) : (
          <TextSm
            text="Start A New Conversation"
            classes="leading-tight tracking-tight !text-gray-900 dark:!text-gray-400"
          />
        )}
      </div>
    </div>
  );
};

export default ContactItem;
