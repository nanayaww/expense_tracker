import { MdOutlineDashboard } from "react-icons/md";
import Button from "../Button";
import { RiFileList3Line } from "react-icons/ri";
import { LuShapes } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import List from "./List";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import AddExpense from "../main/expenseList/AddExpense";

function Sidebar({
  expense,
  setExpense,
  handleShowExpense,
  handleCloseExpense,
  showAddExpense,
  selectedExpense,
  categories,
}) {
  return (
    <aside className=" md:col-span-[1/2] flex flex-col col-span-1 h-dvh border-r border-r-gray-200 ">
      <div className=" h-[10%] flex justify-center items-center text-lg ">
        <h1>Expense tracker</h1>
      </div>
      <hr className=" lines h-px" />
      <div className=" flex flex-col flex-1 py-8">
        <div className="h-[10%] px-3">
          <AddExpense
            handleClick={handleShowExpense}
            handleClose={handleCloseExpense}
            showAddExpense={showAddExpense}
            expense={expense}
            setExpense={setExpense}
            selectedExpense={selectedExpense}
            categories={categories}
          />
          <Button
            handleClick={handleShowExpense}
            child={<IoIosAdd size={"1em"} />}
            value="Add expense"
            style={" bg-blue-600 p-3 rounded-sm text-white flex items-center "}
          />
        </div>
        <nav className=" flex-1 flex flex-col justify-between h-100 pt-5 ">
          <ul className=" flex flex-col gap-4 px-3 ">
            <Link to={"/"}>
              <List child={<MdOutlineDashboard />} value="Dashboard" />
            </Link>
            <Link to={"/expenselist"}>
              <List child={<RiFileList3Line />} value="Expense List" />
            </Link>
            <Link to={"categories"}>
              <List child={<LuShapes />} value="Categories" />
            </Link>
            <Link to={"reports"}>
              <List child={<TbReportAnalytics />} value="Reports" />
            </Link>
          </ul>
          <div>
            <hr className=" lines" />
            <ul className=" flex flex-col gap-4 pt-2 px-3 ">
              <li>
                {" "}
                <CiSettings /> Settings
              </li>
              <li>
                {" "}
                <BiSupport /> Support
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
