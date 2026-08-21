function ReportsCard({ title, value, child }) {
  return (
    <div className="grid gap-2 border border-gray-200 bg-white p-3">
      <span className=" text-sm flex justify-between ">
        {title}
        <span className="">{child}</span>
      </span>
      <span className=" text-lg font-bold">{value} </span>
    </div>
  );
}

export default ReportsCard;
