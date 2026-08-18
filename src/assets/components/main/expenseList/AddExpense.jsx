function AddExpense({ showAddExpense }) {
  return (
    <div
      className={`absolute ${showAddExpense ? "translate-1/2" : "-translate-100"}
     bg-white w-[calc(50vw)] `}
    >
      AddExpense
    </div>
  );
}

export default AddExpense;
