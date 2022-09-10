export const Punto4 = () => {

  const Contar = (numeros_4) => {
    if(numeros_4===""){return;}
    var rep_msg = "No hay números repetidos";
    const LosNumeros = numeros_4.split('');
    for (var i=0;i<3;i++)
    {
      if( (LosNumeros[i]===LosNumeros[i+1]) || (LosNumeros[i]===LosNumeros[i+2])
      || (LosNumeros[i]===LosNumeros[i-1]) || (LosNumeros[i]===LosNumeros[i-2]) )
      {rep_msg = LosNumeros[i]+" se repite";}
    }
    document.getElementById('msg_rep').innerHTML = rep_msg;
  }

  return (
    <>
    <h1>Contador de numeros repetidos</h1>
    <div className="rep">
    <input id="num_rep" type="text" maxLength={3} placeholder="000"/>
    <button onClick={ () =>  Contar(document.getElementById('num_rep').value)}>Contar</button>
    <p><b id='msg_rep'></b></p>
    </div>
    </>
    )
}
export default Punto4;