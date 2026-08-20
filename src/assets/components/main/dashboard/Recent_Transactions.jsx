import { Link, useOutletContext } from "react-router-dom";

function Recent_Transactions() {
  const { expense } = useOutletContext();

  const recent = getRecentTransactions(expense);

  function getRecentTransactions(data) {
    if (data.length > 4) {
      return data.slice(-3);
    }
    return data;
  }

  return (
    <div className="mt-10 bg-white">
      <span className=" flex items-center justify-between p-3 bg-blue-50 border border-gray-200">
        <span className=" text-xl">Recent Transactions</span>
        <Link to={"/expenselist"}>
          <button className=" text-xs text-blue-800"> VIEW ALL</button>
        </Link>
      </span>
      <table className="w-full">
        <thead>
          <tr>
            <th>Merchant</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {recent.length === 0 ? (
            <tr>
              <td colSpan="4">No transactions</td>
            </tr>
          ) : (
            recent.map((item) => (
              <tr key={item.id}>
                <td>{item.merchant}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  {item.currency} {item.amount}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Recent_Transactions;
