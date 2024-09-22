import LangSwitcher from "./LangSwitcher";
import Balance from "./Balance";
import { useSelector } from "react-redux";
import { selectLang } from "../redux/selectors";

export default function App() {
  const lang = useSelector(selectLang);
  return (
    <div>
      <h1>State management with Redux</h1>

      <Balance />

      <LangSwitcher />
      <p>Selected lang: {lang} </p>
    </div>
  );
}
