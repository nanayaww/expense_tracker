import { IoIosAdd } from "react-icons/io";
import Button from "../../Button";

function CategoryHead() {
  return (
    <div className="grid grid-cols-2 w-full items-center mb-5">
      <div className="">
        <h2 className="  text-xl font-bold">Expense Categories</h2>
        <span className=" text-sm">
          Manage budget limits and track spending categories
        </span>
      </div>
      <div className=" justify-self-end">
        <Button
          value={"New category"}
          child={<IoIosAdd />}
          style=" expenseButtons border border-gray-200 bg-white"
        />
      </div>
    </div>
  );
}

export default CategoryHead;
