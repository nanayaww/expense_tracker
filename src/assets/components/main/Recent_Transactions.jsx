function Recent_Transactions() {
  return (
    <div className="mt-10">
      <span className=" flex items-center justify-between p-5 bg-blue-50">
        <span className=" text-xl">Recent Transactions</span>
        <button className=" text-xs text-blue-800"> VIEW ALL</button>
      </span>
      <table className="w-full">
        <tr>
          <th>Merchant</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Delta Airlines</td>
          <td>Travel</td>
          <td>Aug 13th, 2026</td>
          <td>Ghs2,500.00</td>
        </tr>
        <tr>
          <td>Delta Airlines</td>
          <td>Travel</td>
          <td>Aug 13th, 2026</td>
          <td>Ghs2,500.00</td>
        </tr>
        <tr>
          <td>Delta Airlines</td>
          <td>Travel</td>
          <td>Aug 13th, 2026</td>
          <td>Ghs2,500.00</td>
        </tr>
      </table>
    </div>
  );
}

export default Recent_Transactions;
