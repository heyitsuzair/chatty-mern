import React, { useContext, useState } from "react";
import {
  ErrorMessage,
  InputPlain,
  SpinnerSmall,
  SuccessMessage,
  TextXl,
} from "../../components/commons";
import { contactContext } from "../../context/contact";

const AddContact = ({ isModalOpen, setIsModalOpen }) => {
  const { createContact, setContacts, contacts } = useContext(contactContext);

  /**
   * State For Loading
   */
  const [isLoading, setIsLoading] = useState(false);
  /**
   * State For Username To Add
   */
  const [username, setUsername] = useState("");
  /**
   * State For Username To Add
   */
  const [usernameTouched, setUsernameTouched] = useState(false);

  /**
   * @function onUsernameChange
   *
   * Triggers on Username Change event
   */
  const onUsernameChange = (e) => {
    setUsernameTouched(true);
    setUsername(e.target.value);
  };

  /**
   * @function onAddContact
   *
   * Triggers When Someone Submits Form
   *
   * Call The API To Add Contact
   */
  const onAddContact = async (e) => {
    e.preventDefault();
    /**
     * If Username Is Empty Return
     *
     * set usernameTouched State To True
     */
    if (username === "") {
      setUsernameTouched(true);
      return;
    }

    setIsLoading(true);

    /**
     * Date For API
     */
    const data = {
      username,
    };

    const response = await createContact(data);

    /**
     * If There Is Any Error Show Error In Toast
     *
     * Stops Loading
     *
     * return the code
     */
    if (response.error) {
      ErrorMessage(response.msg);
      setIsLoading(false);
      return;
    }

    SuccessMessage(response.msg);
    setIsLoading(false);
    setIsModalOpen(false);
    setUsername("");
    setUsernameTouched(false);
    console.log(response);
    setContacts([...contacts, response.contact]);
  };

  return (
    <>
      <div
        className={` ${
          isModalOpen ? "opacity-100 visible" : "opacity-0  invisible"
        } fixed bottom-0 rounded bg-white w-3/4 md:w-1/2 transition-all left-[12%] md:left-[30%] top-1/4 h-[17.5%] lg:h-1/3 z-[2] dark:bg-gray-700 p-4 shadow-xl border dark:border-0`}
      >
        <div className="flex items-center justify-between">
          <TextXl
            text="Add Contact"
            classes="leading-tight text-center tracking-tight font-medium !text-gray-900 dark:!text-white"
          />
          <i
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="fa fa-close dark:text-white cursor-pointer text-black"
            aria-hidden="true"
          ></i>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <form onSubmit={onAddContact}>
            <InputPlain
              placeholder="Contact Username"
              onChange={onUsernameChange}
              onBlur={() => setUsernameTouched(true)}
              error={usernameTouched && username === "" ? true : false}
              errorText="Username Cannot Be Empty"
              value={username}
            />
            <button
              type={isLoading ? "button" : "submit"}
              className="w-full text-white h-12 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 mt-4"
            >
              {isLoading ? <SpinnerSmall /> : <span>Add Contact</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddContact;
