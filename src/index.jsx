import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Instructions from "./routes/Instructions";
import StudyPartOne from "./routes/StudyPartOne";
import StudyPartTwo from "./routes/StudyPartTwo";
import Demographics from "./routes/Demographics";
import End from "./routes/End";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/studyPartOne",
        element: <StudyPartOne />,
      },
      {
        path: "/studyPartTwo",
        element: <StudyPartTwo />,
      },
      {
        path: "/demographics",
        element: <Demographics />,
      },
      {
        path: "/end",
        element: <End />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
