import Container from "./assets/components/main/Container";
import Sidebar from "./assets/components/sidebar/Sidebar";

function App() {
  return (
    <div className=" grid grid-cols-4 ">
      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
