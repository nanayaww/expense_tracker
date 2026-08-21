import Button from "../../Button";
import Card from "./Card";
import Recent_Transactions from "../dashboard/Recent_Transactions";

export default function Dashboard() {
  return (
    <div className=" w-full">
      <div className=" grid grid-cols-2 w-full items-center mb-5 ">
        <div className=" flex flex-col">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <span className="text-sm">
            Overview of institutional expenditures.
          </span>
        </div>
        <div className=" justify-self-end">
          <Button
            value="Export report"
            style=" expenseButtons border border-gray-200 bg-white"
          />
        </div>
      </div>
      <div className=" flex gap-5 mt-5 ">
        <Card title="Available capital" value="GHS7000.40" change="1.2%" />
        <Card title="MTD Expenditure" value="GHS5000.53" change="-1.4" />
      </div>
      <div>
        <Recent_Transactions />
      </div>
    </div>
  );
}
