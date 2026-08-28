import { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "./assets/components/main/Container";
import Sidebar from "./assets/components/sidebar/Sidebar";

function App() {
  const [expense, setExpense] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [showAddExpense, setshowAddExpense] = useState(false);
  const [categories, setCategories] = useState(["Travel"]);

  function handleShowExpense() {
    if (!showAddExpense) {
      setSelectedExpense(null);
    }
    setshowAddExpense((isVisible) => !isVisible);
  }

  function editExpenseItem(id) {
    const selectedItem = expense.find((item) => item.id === id);

    if (selectedItem) {
      setSelectedExpense(selectedItem);
      setshowAddExpense(true);
    }
  }

  function handleCloseExpense() {
    setshowAddExpense(false);
    setSelectedExpense(null);
  }

  return (
    <div className=" grid grid-cols-4 ">
      <Sidebar
        expense={expense}
        setExpense={setExpense}
        handleShowExpense={handleShowExpense}
        handleCloseExpense={handleCloseExpense}
        showAddExpense={showAddExpense}
        selectedExpense={selectedExpense}
        categories={categories}
      />
      <Container>
        <Outlet
          context={{
            expense,
            setExpense,
            handleShowExpense,
            editExpenseItem,
            setCategories,
          }}
        />
      </Container>
    </div>
  );
}

export default App;
