import React, { useState, useEffect } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import image from "assets/download.avif";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { CONTACTS } from "routes/constants";
import { RootState } from "store";
import { addUser, udpdateUser } from "store/slices/UserSlice";

export interface IContactData {
  firstname: string;
  lastname: string;
  status: string;
}

const CreateContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.users);
  const [contactData, setContactData] = useState<IContactData>({
    firstname: "",
    lastname: "",
    status: "",
  });

  // function to submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id !== undefined) {
      dispatch(udpdateUser({ index: Number(id), ...contactData }));
      alert("Contact updated successfully!");
      navigate(CONTACTS);
    } else {
      dispatch(addUser(contactData));
      setContactData({
        firstname: "",
        lastname: "",
        status: "",
      });
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      // if id exists, means we are in edit mode.
      const index = Number(id);
      const constactData = users[index];
      setContactData(constactData); // setting the ContactData state to show user values in the form so that the user can edit.
    }
  }, [id, users]);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Contact
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={contactData?.firstname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContactData((prev: IContactData) => {
                    return {
                      ...prev,
                      firstname: e.target.value, // setting the first name for the user
                    };
                  })
                }
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={contactData?.lastname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContactData((prev: IContactData) => {
                    return {
                      ...prev,
                      lastname: e.target.value, // setting the last name for the user
                    };
                  })
                }
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
            </div>
            <div className="mt-2">
              <input
                id="status"
                name="status"
                type="radio"
                value="active"
                checked={contactData?.status === "active"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContactData((prev: IContactData) => {
                    return {
                      ...prev,
                      status: e.target.value, // setting the status for the user
                    };
                  })
                }
                required
              />{" "}
              Active <br />
              <input
                id="status"
                name="status"
                type="radio"
                value="inactive"
                checked={contactData?.status === "inactive"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContactData((prev: IContactData) => {
                    return {
                      ...prev,
                      status: e.target.value, // setting the status for the user
                    };
                  })
                }
              />{" "}
              Inactive
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
