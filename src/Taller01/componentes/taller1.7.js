import {useState} from 'react';

export const Punto7 = () => {

  const [lista_salarios, setListaSalarios] = useState([]);

  const AgregarSalario = (text_salario) => {
    document.getElementById('result_7').innerHTML = "";
    var temp = [...lista_salarios];
    if(temp.length>=10)
    {
      temp.pop();
      temp.unshift({key: "", value: parseFloat(text_salario)});
      temp = temp.map((obj,i)=>{
        var rObj={"key":i, "value":obj.value}
        return rObj;
      })
    }else{
    temp.push({key: temp.length, value: parseFloat(text_salario)});
    }
    setListaSalarios(temp)
  }
  const Subir8 = () => {
    document.getElementById('result_7').innerHTML = "";
    
    if(lista_salarios.length>=10)
    {
      var temp = [...lista_salarios].map( (obj)=>{
        var rObj = {"key": obj.key};
        rObj["value"] = obj.value*1.08
        return rObj;
      })
      setListaSalarios(temp);
      
    }else{
      document.getElementById('result_7').innerHTML = "Debe agregar primero 10 salarios"
    }
  }

  return (
    <>
    <h1>Punto 7</h1>
    <div className='salarios'>
    <div className='rep'>
    <input id="salario" placeholder='$ 123456789' type="number"></input>
    <button onClick={ () =>  AgregarSalario(document.getElementById('salario').value)}>Agregar Salario</button>
    </div>
    <ol>
      {
        lista_salarios.map((salario) =>
        {
          return <li key={salario.key}>$ {salario.value}</li>
        })
      }
    </ol>
    <button className='btn_act' onClick={ () =>  Subir8()}>Actualizar salarios</button>
    <p id='result_7'></p>
    </div>
    </>
    )
}
export default Punto7;