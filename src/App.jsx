import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "./assets/components/main/Container";
import Sidebar from "./assets/components/sidebar/Sidebar";

function App() {
  const [expense, setExpense] = useState([]);
  const [showAddExpense, setshowAddExpense] = useState(false);
  const [categories, setCategories] = useState(["Travel"]);

  function handleShowExpense() {
    showAddExpense ? setshowAddExpense(false) : setshowAddExpense(true);
  }

  return (
    <div className=" grid grid-cols-4 ">
      <Sidebar
        expense={expense}
        setExpense={setExpense}
        handleShowExpense={handleShowExpense}
        showAddExpense={showAddExpense}
        categories={categories}
      />
      <Container>
        <Outlet context={{ expense, setExpense, handleShowExpense, setCategories }} />
      </Container>
    </div>
  );
}

export default App;
