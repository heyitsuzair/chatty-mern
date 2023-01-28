import React, { useContext } from "react";
import { TextLg, TextSm } from "..";
import { authContext } from "../../../context/auth";
import jwt_decode from "jwt-decode";

const ContactItem = ({
  isActive,
  messages,
  _id,
  friend_id,
  onClickContact,
}) => {
  const { user } = useContext(authContext);
  const logged_in_user = jwt_decode(localStorage.getItem("chatty-user"));
  return (
    <div
      onClick={() => onClickContact(_id)}
      className={`contact-item ${
        isActive
          ? "dark:bg-indigo-800 bg-indigo-500"
          : "dark:bg-indigo-500 bg-indigo-300"
      }  hover:dark:bg-indigo-700 hover:bg-indigo-400 cursor-pointer transition-all ease-in-out py-5 px-3 rounded-lg`}
    >
      <div>
        <TextLg
          text={friend_id?.username}
          classes="leading-tight tracking-tight font-medium !text-gray-900 dark:!text-white"
        />
      </div>
      <div className="mt-4">
        {messages?.messages.length > 0 ? (
          messages.messages.map((message, index) => {
            if (index === messages.messages.length - 1) {
              const isMessageSeen =
                message.sender_id !== logged_in_user.user_id && !message.seen;
              const messageText =
                message.message.length > 20
                  ? message.message.substring(0, 20) + "..."
                  : message.message;
              return (
                <div
                  key={message._id}
                  className="flex items-center justify-between w-full"
                >
                  <TextSm
                    text={messageText}
                    classes={`leading-tight tracking-tight ${
                      isMessageSeen
                        ? " font-bold !text-black dark:!text-white"
                        : "!text-gray-900 dark:!text-gray-400"
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
