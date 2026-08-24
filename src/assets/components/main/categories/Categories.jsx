import { IoIosAdd } from "react-icons/io";
import CategoryCard from "./CategoryCard";
import CategoryHead from "./CategoryHead";
import { useState } from "react";
import AddCategory from "./AddCategory";
import { useOutletContext } from "react-router-dom";

function Categories() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const { setCategories } = useOutletContext();

  return (
    <div className="w-full">
      <CategoryHead />
      <div className="grid sm:grid-cols-3 gap-5">
        <CategoryCard title={"TOTAL MONTHLY BUDGET"} value={"$4000"} />
        <CategoryCard title={"TOTAL SPENT"} value={"$3000"} />
        <CategoryCard title={"BALANCE"} value={"$1000"} />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <AddCategory
          showCategoryForm={showCategoryForm}
          setShowCategoryForm={setShowCategoryForm}
          setCategories={setCategories}
        />
        <button
          onClick={() => setShowCategoryForm(!showCategoryForm)}
          className="grid place-items-center border border-gray-200 bg-white p-3"
        >
          <IoIosAdd className="bg-blue-200 rounded-sm" />
          <span>Create Custom Category</span>
        </button>
      </div>
    </div>
  );
}

export default Categories;
