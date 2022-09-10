import {useState, useEffect} from 'react';

export const Punto2 = () => {

  const [costo, setCosto] = useState(0);

  const CantAPagar = (minutos, segundos) => {
    if(minutos<0 || segundos<0){
      document.getElementById("text_1").value=""
      document.getElementById("text_2").value=""
      setCosto(0); return;
    }
    if((minutos==="0" && segundos==="0")||(minutos==="" && segundos==="")||
       (minutos==="0" && segundos==="")||(minutos==="" && segundos==="0"))
    {setCosto(0); return;}
    var res = 100;
    if((minutos>3)||(minutos==="3"&&segundos>"0")){
      res = 200;
      let minutosAdicionales = minutos-3;
      if(minutosAdicionales>0){res += minutosAdicionales*50}
    }
    setCosto(res);
  }

  useEffect( () => {
    //console.log(category)
  }, [costo])

  return (
    <>
    <h1>Cantidad a pagar por llamadas</h1>
        <input className='input_call' id="text_1" type="number" placeholder="00"/>
        :
        <input className='input_call' id="text_2" type="number" max={60} placeholder="00"/>
        <button className='button_call' onClick={ () =>  CantAPagar(document.getElementById("text_1").value,document.getElementById("text_2").value)}>Cobrar</button>
        <p id="result"><b>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(costo)}</b></p>
    </>
    )
}
export default Punto2;