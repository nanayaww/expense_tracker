import Button from "../../Button";
import Card from "./Card";
import Recent_Transactions from "../dashboard/Recent_Transactions";

export default function Dashboard() {
  return (
    <div className=" w-full">
      <div className=" h-15 flex items-center justify-between ">
        <h2 className=" flex flex-col">
          <span className="text-4xl font-bold">Dashboard</span>
          <span>Overview of institutional expenditures.</span>
        </h2>
        <Button
          value="Export report"
          style=" border border-gray-300 p-2 rounded-sm"
        />
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
