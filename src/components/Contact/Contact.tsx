import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";

const Contact = () => {
  const { id } = useParams(); // get id from the url
  const users = useSelector((state: RootState) => state.users);  // get users from the redux state

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
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
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500 text-black font-semibold">
                    <td className="whitespace-nowrap px-6 py-4">
                      {users[Number(id)]?.firstname}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {users[Number(id)]?.lastname}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {users[Number(id)]?.status === "active"
                        ? "Active"
                        : "Inactive"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
