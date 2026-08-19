import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ExpenseItem from "./ExpenseItem";

function Expense({ expense }) {
  return (
    <div>
      <div className="flex items-center justify-between mt-5 bg-white border border-gray-200 p-3">
        <div className="  ">
          <label className="" htmlFor="">
            <input className=" border border-gray-200 p-2" type="date" />
          </label>
          <span>to</span>
          <label htmlFor="">
            <input className=" border border-gray-200 p-2" type="date" />
          </label>
          <label htmlFor="">
            <select className=" border border-gray-200 p-2" name="" id="">
              <option value="">All categories</option>
            </select>
          </label>
        </div>
        <div>
          <span>
            showing 1-5 of <span>30</span>
          </span>
          <span className=" flex">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <div className=" mt-10">
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {expense.length === 0 ? (
              <tr>
                <td colSpan="4">No transactions</td>
              </tr>
            ) : (
              expense.map((item) => {
                return <ExpenseItem key={item.id} expenseList={item} />;
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expense;
