export const Punto6 = () => {


  const AgregarNumero = (numero6) => {
    var res;
    if(numero6=="")
    {res = "escribe un número primero";}else
    {res = "números impares menores son: ";}
    
    let numeros = [];
    for(var i=1;i<1+ +numero6;i++)
    {
      if((i%2)===0){ numeros.push(i);}
    }
    document.getElementById('numero_6').value = "";
    document.getElementById('res_6').innerHTML = res+numeros.toString().replaceAll(",",", ");
  }

  return (
    <>
    <h1>Punto 6</h1>
    <div className="login">
    <input id="numero_6" type={"number"} placeholder='0' min={2}></input>
    <button onClick={() => AgregarNumero(document.getElementById('numero_6').value)}>Mostrar impares</button>
    <p><b id="res_6"></b></p>
    </div>
    </>
    )
}
export default Punto6;