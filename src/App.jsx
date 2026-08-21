import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "./assets/components/main/Container";
import Sidebar from "./assets/components/sidebar/Sidebar";

function App() {
  const [expense, setExpense] = useState([]);

  return (
    <div className=" grid grid-cols-4 ">
      <Sidebar expense={expense} setExpense={setExpense} />
      <Container>
        <Outlet context={{ expense, setExpense }} />
      </Container>
    </div>
  );
}

export default App;
