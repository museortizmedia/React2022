import { TbUser } from "react-icons/tb";
export const Punto3 = () => {

  const Saludar = (nombre, hora) => {
    if(nombre===""||hora===""){document.getElementById('punto3_res').innerHTML=""; return;}
    var time = 0;
    if(hora.split(":")[0]>12){time=1}
    if(hora.split(":")[0]>18){time=2}
    const modo = ["os Dias, ","as Tardes, ","as Noches, "]
    document.getElementById('punto3_res').innerHTML="Buen"+modo[time]+nombre;
  }

  return (
    <>
    <h1>Inicia Sesión</h1>
    <div className="login">
    <TbUser style={{display:"inline",width:"100px",height:"100px",strokeWidth:"1.25"}}/>  
    <input id="name" type="text" placeholder="Tu nombre"/>
      <input id="time" type="time"/>
      <button onClick={ () =>  Saludar(document.getElementById('name').value, document.getElementById('time').value)}>Entrar</button>
    <p><b id="punto3_res"></b></p>
    </div>
    </>
    )
}
export default Punto3;