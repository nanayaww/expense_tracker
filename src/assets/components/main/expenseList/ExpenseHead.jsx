import { PiExportThin } from "react-icons/pi";
import Button from "../../Button";
import { IoIosAdd } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { useOutletContext } from "react-router-dom";

function ExpenseHead() {
  const { handleShowExpense } = useOutletContext();
  return (
    <div className=" h-15 flex items-center justify-between ">
      <h2 className=" flex flex-col">
        <span className="text-2xl font-bold">Expense List</span>
        <span className=" text-xs">
          Manage and track all institutional expenses.
        </span>
      </h2>
      <div className=" flex gap-2">
        <Button
          child={<IoIosAdd />}
          handleClick={handleShowExpense}
          value="Add Expense"
          style="expenseButtons bg-blue-600 text-white "
        />
        <Button
          child={<CiFilter />}
          value="Filter"
          style=" expenseButtons border border-gray-200 bg-white"
        />
        <Button
          child={<PiExportThin />}
          value="Export"
          style="expenseButtons bg-blue-600 text-white"
        />
      </div>
    </div>
  );
}

export default ExpenseHead;
