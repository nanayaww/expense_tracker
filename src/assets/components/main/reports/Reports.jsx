import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import ReportsCard from "./ReportsCard";
import ReportsHead from "./ReportsHead";
import { CiWallet } from "react-icons/ci";

function Reports() {
  return (
    <div>
      <ReportsHead />
      <div className="grid grid-cols-3 gap-5">
        <ReportsCard
          title={"Total Income"}
          child={<BsGraphUpArrow color="green" />}
          value={"$1,500,338.00"}
        />
        <ReportsCard
          title={"Total Expenses"}
          child={<BsGraphDownArrow color="red" />}
          value={"$500,338.00"}
        />
        <ReportsCard
          title={"Net Spend"}
          child={<CiWallet color="oklch(70.7% 0.165 254.624)" />}
          value={"$2,000,338.00"}
        />
      </div>
    </div>
  );
}

export default Reports;
