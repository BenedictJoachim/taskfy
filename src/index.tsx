import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Register, { registerAction } from "./components/Auth/Register";
import Login, { loginAction } from "./components/Auth/Login";
import TaskDetails from "./components/Tasks/TaskDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "tasks/:id",
        element: <TaskDetails task={{
            id: "",
            title: "",
            description: "",
            status: "pending"
        }} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
