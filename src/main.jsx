import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Habit from "./components/Habit/Habit";
import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Education from "./components/Education/Education";
import Target from "./components/Target/Target";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "habit",
        element: <Habit />,
      },
      {
        path: "target",
        element: <Target />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
