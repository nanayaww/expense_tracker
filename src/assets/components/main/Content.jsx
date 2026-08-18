import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import ExpenseList from "./expenseList/ExpenseList";

function Content() {
  return (
    <div className=" flex-2 flex w-full p-8">
      <Outlet />
    </div>
  );
}

export default Content;
