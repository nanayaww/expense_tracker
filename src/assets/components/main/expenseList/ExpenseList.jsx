import Expense from "./Expense";
import ExpenseHead from "./ExpenseHead";
import { useOutletContext } from "react-router-dom";

function ExpenseList() {
  const { expense } = useOutletContext();

  return (
    <div className=" w-full">
      <ExpenseHead />
      <Expense expense={expense} />
    </div>
  );
}

export default ExpenseList;
