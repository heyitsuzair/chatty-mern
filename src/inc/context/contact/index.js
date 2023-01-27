import { createContext, useContext, useState } from "react";

import React from "react";
import { addContact, getContacts } from "../../functions/contact";
import { authContext } from "../auth";

export const contactContext = createContext();

const ContactsState = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const { user } = useContext(authContext);

  /**
   * Triggers When Someone Logs In
   *
   * Get Contacts Of Logged In User
   */

  /**
   * Triggers When Component Mounts
   *
   * Fetch Contacts Of Logged In User
   */
  const fetchContacts = async (setIsLoading) => {
    const response = await getContacts(user);
    setContacts(response);
    setIsLoading(false);
  };
  /**
   * Triggers When Someone Submits Form
   *
   * Call The API To Add Contact
   */
  const createContact = async (data) => {
    const response = await addContact(data, user);
    return response;
  };

  return (
    <contactContext.Provider
      value={{ setContacts, contacts, fetchContacts, createContact }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactsState;
