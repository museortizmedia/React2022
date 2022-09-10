import {useState} from 'react';
export const Punto9 = () => {
  const [tabla_row, SetTablaRow] = useState([]);
  const [tabla_col, SetTablaCol] = useState([]);

  const CrearTabla = (info) => {
    if(!(info.includes("x") && typeof parseInt(info.split("x")[0]) === 'number' && typeof parseInt(info.split("x")[1]) === 'number'))
    {console.log('datos de info no validos'); return;}
    const row = parseInt(info.split("x")[0]), col = parseInt(info.split("x")[1]);
    let arryrow = [], arrycol = [];
    for(var n=0;n<row;n++){arryrow.push(n);}
    for(var m=0;m<col;m++){arrycol.push(m);}
    
    SetTablaRow(arryrow); SetTablaCol(arrycol);
  }

  return (
    <>
    <h1>Crear Tabla</h1>
    <div className='login'>
    <input id="tabla_9" type={"text"} placeholder='NxM'/>
    <button onClick={() => CrearTabla(document.getElementById('tabla_9').value)}>Crear Tabla</button>
    </div>
    <div className='div_table'>
    <table><tbody>
    {
      /*Arreglo de objetos tipo [ {clave: 0, col: 0}, {clave: 1, col: 0} */
      tabla_row.map((i) =>
      {
        return (
          <tr key={i}>
          {
            tabla_col.map((x) =>
            {
              return (
                <td key={x}>{i+1};{x+1}</td>
              )
            })
          }
          </tr>
        )
      })
    }
    </tbody></table>
    </div>
    </>
    )
}
export default Punto9;