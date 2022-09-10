import React, {useState, useMemo} from "react";
import MemoS from "./Memo_s";

const FuncionMemorizada = (interacciones) => { //una funcion fuera de la exportada
    console.log('funcion memorizada'+interacciones);
}

export const HookUseMemo = () => {
    const [counter, Increment] = useState(0);

    const memo = useMemo(()=>FuncionMemorizada(counter), [counter]) //cada que cambie counter se ejecutará la funcion externa

    return (
      <>
      <MemoS value= {counter}/>
      <button onClick={() => Increment(counter+ +1)}>
        +1
      </button>
      </>
      )}
  export default HookUseMemo;