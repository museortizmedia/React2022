import React, {useState} from "react";
import MemoM from "./Memo_memo";
import MemoS from "./Memo_s";

export const FuncionMemo = () => {
    const [counter, Increment] = useState(0);
    const [virtualCounter, IncrementVirtual] = useState(10);

    return (
      <>
      <MemoS value= {counter}/>
      <MemoM value={virtualCounter}/>
      <button onClick={() => Increment(counter+ +1)}>
        +1
      </button>
      <button onClick={() => IncrementVirtual(virtualCounter+ +10)}>
        +10
      </button>
      </>
      )}
  export default FuncionMemo;