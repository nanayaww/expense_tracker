import Expense from "./Expense";
import ExpenseHead from "./ExpenseHead";
import { useOutletContext } from "react-router-dom";

function ExpenseList() {
  const { expense, setExpense } = useOutletContext();

  return (
    <div className=" w-full">
      <ExpenseHead />
      <Expense expense={expense} setExpense={setExpense} />
    </div>
  );
}

export default ExpenseList;
