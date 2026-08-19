function ExpenseItem({ expenseList }) {
  return (
    <tr key={expenseList.id}>
      <td>{expenseList.date}</td>
      <td>{expenseList.merchant}</td>
      <td>{expenseList.category}</td>
      <td>
        {expenseList.currency}
        {expenseList.amount}
      </td>
    </tr>
  );
}

export default ExpenseItem;
