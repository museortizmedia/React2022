import {useState} from 'react';
export const Punto10 = () => {
  const [tabla_row_10, SetTablaRow] = useState([]);
  const [tabla_col_10, SetTablaCol] = useState([]);

  const CrearTabla = (info) => {
    if(!(info.includes("x") && typeof parseInt(info.split("x")[0]) === 'number' && typeof parseInt(info.split("x")[1]) === 'number'))
    {console.log('datos de info no validos'); return;}
    const row = parseInt(info.split("x")[0]), col = parseInt(info.split("x")[1]);
    let arryrow = [], arrycol = [];
    for(var n=0;n<row;n++){arryrow.push(n);}
    for(var m=0;m<col;m++){arrycol.push(m);}
    arryrow.push(arryrow.length);
    
    SetTablaRow(arryrow); SetTablaCol(arrycol);
  }

  const SumaDeArr = (arr) => {
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {sum+=arr[i];}
    return sum;
  }

  return (
    <>
    <h1>Crea una tabla</h1>
    <div className='login'>
    <input id="tabla_10" type={"text"} placeholder='NxM'/>
    <button onClick={() => CrearTabla(document.getElementById('tabla_10').value)}>Crear Tabla</button>
    </div>
    <div className='div_table'>
    <table><tbody>
    {
      /*Arreglo de objetos tipo [ {clave: 0, col: 0}, {clave: 1, col: 0} */
      tabla_row_10.map((i, pos) =>
      {
        return (
          <tr key={i}>
          {
            tabla_col_10.map((x) =>
            {
              return (
                <td key={x}>{pos===(tabla_row_10.length-1)? <b>{"Total: "+(SumaDeArr(tabla_row_10)+((x+1)*i))}</b> : (i+1)+";"+(x+1)}</td>
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
export default Punto10;