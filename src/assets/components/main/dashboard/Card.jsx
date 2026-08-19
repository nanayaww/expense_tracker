function Card({ title, value, change }) {
  return (
    <div className=" flex-1 border border-gray-200 bg-white flex flex-col p-3 gap-8 ">
      <div className="">
        <span className=" text-sm ">{title} </span>
        <span className=" text-2xl font-bold">{value} </span>
      </div>
      <span className=" text-sm">
        <span>{change}</span> vs last month{" "}
      </span>
    </div>
  );
}

export default Card;
