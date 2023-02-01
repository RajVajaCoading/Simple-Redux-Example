
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {incNumber,decNumber} from "./action/index"

function App() {
  const myState = useSelector((state)=>state.numberChange);
  const dispach = useDispatch();
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
        <button onClick={()=>dispach(incNumber(5))}>+</button><br/><br/>
        <span>{myState}</span><br/><br/>
        <button onClick={()=>dispach(decNumber())}>-</button><br/><br/>

      </div>
    </div>
  );
}

export default App;
