import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CONTACTS, CREATE_CONTACT, DASHBOARD } from "routes/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { changeToggle } from "store/slices/ToggleSlice";

const Navbar = () => {
  const { toggle } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex justify-between items-center py-[20px] max-w-[1240px] mx-auto">
        <div className="text-3xl font-bold text-white">Taiyō.Ai Task</div>
        {toggle ? (
          <AiOutlineClose
            className="text-white text-2xl md:hidden block cursor-pointer"
            onClick={() => dispatch(changeToggle())}
          />
        ) : (
          <AiOutlineMenu
            className="text-white text-2xl md:hidden block cursor-pointer"
            onClick={() => dispatch(changeToggle())}
          />
        )}
        <ul className="hidden md:flex text-white gap-5">
          <li>
            <Link to={DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={CREATE_CONTACT}>Create Contact</Link>
          </li>
          <li>
            <Link to={CONTACTS}>All Contacts</Link>
          </li>
        </ul>

        {/* responsive menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[108px] ${
            toggle ? "right-[0]" : "right-[-100%]"
          }`}
        >
          <li className="p-5">
            <Link to={DASHBOARD} onClick={() => dispatch(changeToggle())}>
              Dashboard
            </Link>
          </li>
          <li className="p-5">
            <Link to={CREATE_CONTACT} onClick={() => dispatch(changeToggle())}>
              Create Contact
            </Link>
          </li>
          <li className="p-5">
            <Link to={CONTACTS} onClick={() => dispatch(changeToggle())}>
              All Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
