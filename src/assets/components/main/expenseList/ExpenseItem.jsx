import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

function ExpenseItem({ expenseList, handleClick, handleEdit }) {
  return (
    <tr className="hover:bg-blue-200" key={expenseList.id}>
      <td>{expenseList.date}</td>
      <td>{expenseList.merchant}</td>
      <td>{expenseList.category}</td>
      <td>
        {expenseList.currency}
        {expenseList.amount}
      </td>
      <td className="flex justify-center p-3 gap-[1ch] ">
        <span>
          <MdOutlineModeEditOutline
            onClick={() => handleEdit(expenseList.id)}
          />
        </span>
        <span onClick={() => handleClick(expenseList.id)}>
          <MdDeleteOutline />
        </span>
      </td>
    </tr>
  );
}

export default ExpenseItem;
