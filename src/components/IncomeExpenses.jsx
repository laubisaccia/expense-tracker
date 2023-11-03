import { useGlobalState } from "./context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);
  const expenses =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0)
      .toFixed(2) * -1;
  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{incomes}</p>
      </div>

      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expenses}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
