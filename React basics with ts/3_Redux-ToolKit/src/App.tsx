import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, stateType } from "./redux";

function App() {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch(); //dispatch;
  const count = useSelector((state: stateType) => state.count);
  const incrementByValueHandler = () => {
    dispatch(incrementByValue(val));
    setVal(0);
  };

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <>
      <h1>Redux ToolKit with TypeScript</h1>

      <h1>count is :{count}</h1>

      <button onClick={incrementHandler}>+</button>
      <button disabled={count === 0} onClick={decrementHandler}>
        -
      </button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button onClick={incrementByValueHandler}>Add</button>
    </>
  );
}

export default App;
