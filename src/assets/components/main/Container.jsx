import Content from "./Content";
import Navbar from "./Navbar";

function Container({ expense }) {
  return (
    <div className=" col-span-3 flex flex-col bg-blue-50 ">
      <Navbar />
      <Content expense={expense} />
    </div>
  );
}

export default Container;
