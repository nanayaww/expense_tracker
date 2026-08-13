import Content from "./Content";
import Navbar from "./Navbar";

function Container() {
  return (
    <div className=" col-span-3 flex flex-col ">
      <Navbar />
      <Content />
    </div>
  );
}

export default Container;
