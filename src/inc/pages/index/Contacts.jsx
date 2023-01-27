import React, { useContext, useState } from "react";
import {
  ContactItem,
  PlainButton,
  Text2Xl,
  TextMd,
} from "../../components/commons";
import { contactContext } from "../../context/contact";
import AddContact from "./AddContact";

const Contacts = ({ selectedContact, onClickContact }) => {
  /**
   * Context
   */
  const { contacts } = useContext(contactContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="contacts">
      <AddContact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <header className="hidden lg:flex items-center justify-between p-7">
        <Text2Xl
          text="Chats"
          classes="leading-tight tracking-tight font-bold !text-gray-900 dark:!text-white"
        />
        <PlainButton
          icon={`fa ${isModalOpen ? "fa-close" : "fa-plus"} -ml-2`}
          textColor="text-indigo-700 dark:text-white"
          onClick={() => setIsModalOpen(!isModalOpen)}
          buttonColor="dark:bg-indigo-600 dark:hover:bg-indigo-700 bg-indigo-300 hover:bg-indigo-400"
          isSquare
          text=""
        />
      </header>
      <div
        className={`contact-items overflow-y-scroll h-[77vh] hidden lg:flex flex-col gap-4 px-2 pt-4 pb-3 ${
          contacts.length > 0 || "items-center justify-center"
        }`}
      >
        {contacts.length > 0 ? (
          contacts.map((contact) => {
            return (
              <ContactItem
                isActive={contact.contact._id === selectedContact}
                onClickContact={onClickContact}
                {...contact}
                key={contact.contact._id}
              />
            );
          })
        ) : (
          <TextMd
            text="No Contacts Found"
            classes="!text-black dark:!text-white"
          />
        )}
      </div>
    </div>
  );
};

export default Contacts;
