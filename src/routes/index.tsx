import { createBrowserRouter } from "react-router-dom";
import * as UI_ROUTES from "./constants";
import Landing from "components/Landing";
import Dashboard from "components/Dashboard/Dashboard";
import CreateContact from "components/Contact/CreateContact";
import Navbar from "components/Navbar";
import Contacts from "components/Contact/Contacts";
import Contact from "components/Contact/Contact";

/* Higher order component */
const HOC = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

/* Routes for the application */
export const router = createBrowserRouter([
  {
    path: UI_ROUTES.ROOT, // the root path
    element: (
      <HOC>
        <Landing />
      </HOC>
    ),
  },
  {
    path: UI_ROUTES.DASHBOARD, // Dashboard path
    element: (
      <HOC>
        <Dashboard />
      </HOC>
    ),
  },
  {
    path: UI_ROUTES.CREATE_CONTACT, // Create contact patn
    element: (
      <HOC>
        <CreateContact />
      </HOC>
    ),
  },
  {
    path: UI_ROUTES.EDIT_CONTACT, // Edit contact path
    element: (
      <HOC>
        <CreateContact />
      </HOC>
    ),
  },
  {
    path: UI_ROUTES.CONTACTS, // All contacts path
    element: (
      <HOC>
        <Contacts />
      </HOC>
    ),
  },
  {
    path: UI_ROUTES.CONTACT, // Contact Details path
    element: (
      <HOC>
        <Contact />
      </HOC>
    ),
  },
]);
