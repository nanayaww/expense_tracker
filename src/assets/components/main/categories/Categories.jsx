import CategoryCard from "./CategoryCard";
import CategoryHead from "./CategoryHead";

function Categories() {
  return (
    <div className="w-full">
      <CategoryHead />
      <div className="grid grid-cols-3 gap-5">
        <CategoryCard title={"Total Monthly Budget"} value={"$4000"} />
        <CategoryCard title={"Total Spent"} value={"$3000"} />
        <CategoryCard title={"Balance"} value={"$1000"} />
      </div>
      <div></div>
    </div>
  );
}

export default Categories;
