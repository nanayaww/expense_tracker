function CategoryCard({ title, value }) {
  return (
    <div className="grid gap-2 border border-gray-200 bg-white p-3">
      <span className=" text-xs ">{title}</span>
      <span className=" text-xl font-bold">{value} </span>
    </div>
  );
}

export default CategoryCard;
