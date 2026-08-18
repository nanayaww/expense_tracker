import Button from "../../Button";

function AddExpense({ showAddExpense, handleClick, setExpense }) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newExpense = {
      id: crypto.randomUUID(),
      amount: formData.get("amount"),
      currency: formData.get("currency"),
      category: formData.get("category"),
      date: formData.get("date"),
      merchant: formData.get("merchant"),
      notes: formData.get("notes"),
    };

    setExpense((prev) => [...prev, newExpense]);
    console.log(newExpense);

    e.target.reset();
    handleClick();
  }

  return (
    <div
      className={`fixed left-1/2 w-[calc(50vw)] max-w-100 -translate-x-1/2 bg-white shadow-xl transition-all duration-300 ease-in-out ${
        showAddExpense
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="p-5">
        <div>
          <h2 className="text-2xl font-bold">Add Expense</h2>
          <span className="text-xs text-gray-500">
            Record a new transaction for institutional tracking
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="my-5 flex flex-col gap-3 ">
            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor="amount" className="flex flex-col gap-1">
                Amount
                <input
                  className="formInput"
                  type="number"
                  name="amount"
                  id="amount"
                />
              </label>

              <label htmlFor="currency" className="flex flex-col gap-1">
                Currency
                <select className="formInput" name="currency" id="currency">
                  <option value="usd">USD</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor="category" className="flex flex-col gap-1">
                Category
                <select className="formInput" name="category" id="category">
                  <option value="Travel">Travel</option>
                </select>
              </label>

              <label htmlFor="date" className="flex flex-col gap-1">
                Date
                <input
                  className="formInput"
                  type="date"
                  name="date"
                  id="date"
                />
              </label>
            </div>

            <label htmlFor="merchant" className="flex flex-col gap-1">
              Merchant
              <input
                className="formInput"
                type="text"
                name="merchant"
                id="merchant"
                placeholder="e.g Groove"
              />
            </label>

            <label htmlFor="notes" className="flex flex-col gap-1">
              Notes
              <textarea className="formInput" name="notes" id="notes" />
            </label>
          </div>
          <div className=" grid grid-cols-2 ">
            <Button
              handleClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              value="cancel"
              style={
                "bg-blue-600 px-4 py-2 rounded-sm justify-self-end text-white flex items-center"
              }
            />
            <Button
              value="Add"
              style={
                "bg-white px-4 py-2 rounded-sm border justify-self-end border-gray-200 flex items-center"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
