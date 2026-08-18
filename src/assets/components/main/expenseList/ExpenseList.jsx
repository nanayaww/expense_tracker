import Expense from "./Expense";
import ExpenseHead from "./ExpenseHead";

function ExpenseList() {
  return (
    <div className=" w-full">
      <ExpenseHead />
      <Expense />
    </div>
  );
}

export default ExpenseList;
