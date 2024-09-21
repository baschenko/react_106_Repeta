import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/store";

export default function Balance() {
  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(100));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(50));
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>
      {/* <input type="number" /> */}
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
