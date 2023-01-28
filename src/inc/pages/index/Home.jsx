import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlainButton, SpinnerLarge, TextMd } from "../../components/commons";
import { socket } from "../../config";
import { RoutePaths } from "../../config/routes";
import { authContext } from "../../context/auth";
import { contactContext } from "../../context/contact";
import ChatBox from "./ChatBox";
import Contacts from "./Contacts";

const Home = () => {
  document.title = "Chatty";

  const { user, setUser } = useContext(authContext);

  /**
   * State To Store Contact ID When Selected
   */
  const [selectedContact, setSelectedContact] = useState(null);

  /**
   * State For Active Chat
   */
  const [chat, setChat] = useState(null);

  const { fetchContacts, contacts, setContacts } = useContext(contactContext);

  const [isLoading, setIsLoading] = useState(true);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  /**
   * @function onClickContact
   *
   * Triggers When Someone Clicks On Contact
   */
  const onClickContact = (contact_id) => {
    /**
     * Find Contact By Its ID
     */
    const contact = contacts.find((contact) => contact._id === contact_id);
    setChat(contact);
    setSelectedContact(contact_id);
  };

  /**
   * Socket Io Configuration
   */
  const callSocket = () => {
    if (user) {
      socket.emit("onLogin", user);

      socket.on("userConnected", (user_id) => {
        if (user_id !== undefined) {
          /**
           * Check Whether User Which Is Connected Is In Contacts Array
           *
           * @true Make Contact Online In Real Time
           */
          const contact = contacts.find((contact) => {
            return contact.friend_id._id === user_id;
          });
          const index = contacts.findIndex(
            (contact) => contact.friend_id._id === user_id
          );
          if (contact) {
            contacts[index].friend_id.last_active = "Online";
            setContacts(contacts);
          }
        }
      });
      socket.on("userDisConnected", (user_id) => {
        if (user_id !== undefined) {
          /**
           * Check Whether User Which Is DisConnected Is In Contacts Array
           *
           * @true Make Contact Offline In Real Time
           */
          const contact = contacts.find((contact) => {
            return contact.friend_id._id === user_id;
          });
          const index = contacts.findIndex(
            (contact) => contact.friend_id._id === user_id
          );
          if (contact) {
            contacts[index].friend_id.last_active = new Date();
            setContacts(contacts);
          }
        }
      });
    }
  };

  /**
   * @function onLogout
   *
   * Triggers When Someone Logs out
   */
  const onLogout = () => {
    const user = localStorage.getItem("chatty-user");
    socket.emit("onLogout", user);
    localStorage.removeItem("chatty-user");
    setUser(null);
    navigate(RoutePaths.login);
  };

  useEffect(() => {
    /**
     * Protected Route
     */
    if (!user || !localStorage.getItem("chatty-user")) {
      navigate(RoutePaths.login);
      return;
    }
    callSocket();
    fetchContacts(setIsLoading);
    //eslint-disable-next-line
  }, [contacts]);

  /**
   * Chatbox Props
   */
  const chatboxProps = {
    ...chat,
    selectedContact,
  };
  /**
   * Contacts Props
   */
  const contactsProps = {
    selectedContact,
    setSelectedContact,
    onClickContact,
  };

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <SpinnerLarge />
        </div>
      ) : (
        <div className="h-screen lg:p-5">
          <PlainButton
            icon="fa fa-sign-out -ml-2"
            textColor="text-indigo-700 dark:text-white"
            onClick={() => onLogout()}
            buttonColor="dark:bg-indigo-600 fixed right-20 top-3 dark:hover:bg-indigo-700 bg-indigo-300 hover:bg-indigo-400"
            isSquare
            text=""
          />
          <div className="bg-white rounded-xl shadow-md dark:border h-[94vh] dark:bg-gray-800 dark:border-gray-700">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4 border-r border-indigo-500">
                <Contacts {...contactsProps} />
              </div>
              <div className="col-span-12 lg:col-span-8">
                {selectedContact ? (
                  <ChatBox {...chatboxProps} />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <TextMd
                      text="Select A Conversation To Get Started"
                      classes="!text-black dark:!text-white"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
