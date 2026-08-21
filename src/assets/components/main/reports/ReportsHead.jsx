import Button from "../../Button";
import { IoIosAddCircleOutline } from "react-icons/io";

function ReportsHead() {
  return (
    <div className="grid grid-cols-2 w-full items-center mb-5">
      <div>
        <h2 className="text-xl font-bold">Reports</h2>
        <span className="text-sm">
          Comprehensive finicial overview and insights
        </span>
      </div>
      <div className="justify-self-end">
        <Button
          style=" expenseButtons border border-gray-200 bg-white"
          child={<IoIosAddCircleOutline />}
          value={"Export"}
        />
      </div>
    </div>
  );
}

export default ReportsHead;
