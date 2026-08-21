import Content from "./Content";
import Navbar from "./Navbar";

function Container({ children }) {
  return (
    <div className=" col-span-3 flex flex-col bg-blue-50 ">
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
}

export default Container;
