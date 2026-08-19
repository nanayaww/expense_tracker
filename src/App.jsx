import { useState } from "react";
import Container from "./assets/components/main/Container";
import Sidebar from "./assets/components/sidebar/Sidebar";

function App() {
  const [expense, setExpense] = useState([]);

  return (
    <div className=" grid grid-cols-4 ">
      <Sidebar expense={expense} setExpense={setExpense} />
      <Container expense={expense} />
    </div>
  );
}

export default App;
