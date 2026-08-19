import { Outlet } from "react-router-dom";

function Content({ expense }) {
  return (
    <div className=" flex-2 flex w-full p-8">
      <Outlet context={{ expense }} />
    </div>
  );
}

export default Content;
