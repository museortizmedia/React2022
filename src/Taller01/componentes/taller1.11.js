export const Punto11 = () => {

  const ComprobarEstudiante = (estudiante) => {
    document.getElementById('res_11_name').innerHTML = "";
    document.getElementById('res_11').innerHTML = "";
    if(isNaN(estudiante.nota1)||isNaN(estudiante.nota2)||isNaN(estudiante.nota3)){return}
    document.getElementById('res_11_name').innerHTML = estudiante.nombre.toUpperCase();
    let res = ((estudiante.nota1+estudiante.nota2+estudiante.nota3)/3)<3.0?"no pasa la materia :c":"Está aprobado";
    if(estudiante.nombre === ""){res="Escriba el nombre del alumno";}
    document.getElementById('res_11').innerHTML = res;
  }
 
  return (
    <>
    <h1>Notas Estudiante OBJ</h1>
    <div className="div_table">
    <input className="_11_input" id="student_name" type={"text"} placeholder='Nombre Estudiante'/>
    <input className="_11_nota" id="student_nota_1" type={"number"} placeholder='0.0' min={0.0} max={5.0} maxLength={3} step={0.1}/>
    <input className="_11_nota" id="student_nota_2" type={"number"} placeholder='0.0' min={0.0} max={5.0} maxLength={3} step={0.1}/>
    <input className="_11_nota" id="student_nota_3" type={"number"} placeholder='0.0' min={0.0} max={5.0} maxLength={3} step={0.1}/>
    <button onClick={() => ComprobarEstudiante(
      {nombre: document.getElementById('student_name').value,
      nota1: parseFloat(document.getElementById('student_nota_1').value),
      nota2: parseFloat(document.getElementById('student_nota_2').value),
      nota3: parseFloat(document.getElementById('student_nota_3').value)}
      )}>Subir Notas</button>
    <p><b id="res_11_name"></b></p>
    <p id="res_11"></p>
    </div>
    </>
    )
}
export default Punto11;