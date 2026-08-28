import Expense from "./Expense";
import ExpenseHead from "./ExpenseHead";
import { useOutletContext } from "react-router-dom";

function ExpenseList() {
  const { expense, setExpense, editExpenseItem } = useOutletContext();

  return (
    <div className=" w-full">
      <ExpenseHead />
      <Expense
        expense={expense}
        setExpense={setExpense}
        editExpenseItem={editExpenseItem}
      />
    </div>
  );
}

export default ExpenseList;
