import {useState} from 'react';

export const Punto5 = () => {

  const [lista_num, setLista] = useState([]);

  const AgregarNumero = (nuevo_numero) => {
    if(nuevo_numero===""){return;}
    var temp = [...lista_num];
    temp.push(parseInt(nuevo_numero));
    setLista(temp.sort(function (a,b){return a-b;}));
    document.getElementById('numero_5').value = "";
    console.log(lista_num)
  }

  return (
    <>
    <h1>Lista Ordenada</h1>
    <div className="login">
    <input id="numero_5" placeholder='0'></input>
    <button onClick={() => AgregarNumero(document.getElementById('numero_5').value)}>Agregar Número</button>
    </div>
    <b><ul>
      {
        lista_num.map((numero) =>
        {
          return <li key={numero.toString()} value={numero}>{numero}</li>
        })
      }
    </ul></b>    
    </>
    )
}
export default Punto5;