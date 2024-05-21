import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoginComponent, LandingPageComponent } from "../Components";
import userslist from "./assets/userdetails.json";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const userslistcontext = React.createContext();

const Main = () => {
  return (
    <>
      <React.StrictMode>
        <userslistcontext.Provider value={userslist}>
          <LoginComponent />
        </userslistcontext.Provider>
      </React.StrictMode>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/landing",
    element: <LandingPageComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
