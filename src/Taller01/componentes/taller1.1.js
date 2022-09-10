export const Punto1 = () => {

  const Convertir = (segundos) => {
    let horas =   Math.floor(segundos / 3600);
    horas = (horas < 10)? '0' + horas : horas;
    let minutos = Math.floor((segundos-horas*3600)/60);
    minutos = (minutos < 10)? '0' + minutos : minutos;
    let segundos_reales = segundos%60;
    segundos_reales = (segundos_reales < 10)? '0' + segundos_reales : segundos_reales;
    document.getElementById("result").value = (horas + ":" + minutos + ":" + segundos_reales);
  }

  return (
    <>
    <h1 >Convertidor de segundos a tiempo</h1>
        <input className="input_convertidor_l" autoComplete="off" id="text" type="number" placeholder="hora en segundos"/>
        <button className="button_convertidor" onClick={ () =>  Convertir(document.getElementById("text").value)}>← Convertir →</button>
        <input className="input_convertidor_r" readOnly autoComplete="off" id="result" value="00:00:00"/>
    </>
    )
}
export default Punto1;