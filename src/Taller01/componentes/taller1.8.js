import {useState} from 'react';
export const Punto8 = () => {

  

  const list_random = [Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)]
  const [lista_random, SetListRam] = useState(list_random);

  const PosNumeroAleatorio = (index8) => {
    if(index8<0){index8=0}
    if(index8>10){index8=10}
    let res = [];
    if(index8!==0)
    {
      for(var i=0;i<index8;i++)
      {
        res.push(lista_random[i])
      }
    }
    document.getElementById('result_8').innerHTML = res.toString().replaceAll(",",", ");
  }
  const ListaAleatoria = () => {
    SetListRam([Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)])
  }
  return (
    <>
    <h1>Punto 8</h1>
    <div className='num'>
    <p id="array_8">Lista de números aleatorios: {lista_random.toString().replaceAll(",",", ")}</p>
    Cantidad de numeros aleatorios: <input className='num_ramd' id="index_8" type={"number"} max={10} min={0} placeholder='0'/>
    </div>
    <button className='num_ramd_btn' onClick={() => PosNumeroAleatorio(Math.floor(parseInt(document.getElementById('index_8').value)))}>Mostrar</button>
    <button className='num_ramd_btn' onClick={() => ListaAleatoria()}>Nueva Lista</button>
    <p><b id="result_8"></b></p>
    </>
    )
}
export default Punto8;