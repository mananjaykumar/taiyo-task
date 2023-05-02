import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { deleteUser } from "store/slices/UserSlice";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { IContactData } from "./CreateContact";
import { CONTACTS, CREATE_CONTACT } from "routes/constants";

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users); // get users from the redux state

  const handleDeleteContact = (index: number) => {
    // function to delete a contact
    dispatch(deleteUser(index));
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="p-1 ">
        <div>
          <h2>All Contacts</h2>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        First Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.length !== 0 ? (
                      users?.map((item: IContactData, index: number) => (
                        <tr
                          className="border-b dark:border-neutral-500 text-black font-semibold"
                          key={String(index)}
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {item?.firstname}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item?.lastname}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 space-x-3 flex items-center justify-center">
                            <AiFillEye
                              size="1.3rem"
                              className="cursor-pointer"
                              onClick={() => navigate(`${CONTACTS}/${index}`)} // navigating to contact details screen
                            />
                            <AiFillEdit
                              size="1.3rem"
                              className="cursor-pointer"
                              onClick={
                                () => navigate(`${CREATE_CONTACT}/${index}`) // navigating to edit screen
                              }
                            />
                            <AiFillDelete
                              size="1.3rem"
                              className="cursor-pointer"
                              onClick={() => handleDeleteContact(index)} // calling delete function with index value
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      // Show no contacts if there users.length === 0
                      <tr className="border-b dark:border-neutral-500">
                        <td
                          className="whitespace-nowrap px-6 py-4 text-center"
                          colSpan={3}
                        >
                          No Contacts
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
