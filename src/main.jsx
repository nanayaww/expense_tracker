import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExpenseList from "./assets/components/main/expenseList/ExpenseList.jsx";
import Categories from "./assets/components/main/categories/Categories.jsx";
import Dashboard from "./assets/components/main/dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "expenselist", element: <ExpenseList /> },
      { path: "categories", element: <Categories /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
