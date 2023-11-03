import { useGlobalState } from "../context/GlobalState";
import { TransactionItem } from "../TransactionItem";
function TransactionLists() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-lf font-bold w-full">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}
export default TransactionLists;
