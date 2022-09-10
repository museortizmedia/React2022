export const Punto12 = () => {

  const ComprobarEstudiante = (estudiante) => {
    document.getElementById('res_12_name').innerHTML = "";
    document.getElementById('res_12').innerHTML = "";
    if(isNaN(estudiante[1])||isNaN(estudiante[2])||isNaN(estudiante[3])){return}
    document.getElementById('res_12_name').innerHTML = estudiante[0];
    let res = ((estudiante[1]+estudiante[2]+estudiante[3])/3)<3.0?"no pasa la materia :c":"Está aprobado";
    if(estudiante[0] === ""){res="Escriba el nombre del alumno";}
    document.getElementById('res_12').innerHTML = res;
  }
 
  return (
    <>
    <h1>Notas Estudiante ARR</h1>
    <div className="div_table">
    <input className="_11_input" id="student_name_12" type={"text"} placeholder='Nombre Estudiante'/>
    <input className="_11_nota" id="student_nota_1_12" type={"number"} placeholder='0.0' min={0.0} max={5.0} maxLength={3} step={0.1}/>
    <input className="_11_nota" id="student_nota_2_12" type={"number"} placeholder='0.0' min={0.0} max={5.0} maxLength={3} step={0.1}/>
    <input className="_11_nota" id="student_nota_3_12" type={"number"} placeholder='0.0' min={0.0} max={5.0} maxLength={3} step={0.1}/>
    <button onClick={() => ComprobarEstudiante(
      [document.getElementById('student_name_12').value,
      parseFloat(document.getElementById('student_nota_1_12').value),
      parseFloat(document.getElementById('student_nota_2_12').value),
      parseFloat(document.getElementById('student_nota_3_12').value)]
      )}>¿Pasa la materia?</button>
    <p><b id="res_12_name"></b></p>
    <p id="res_12"></p>
    </div>
    </>
    )
}
export default Punto12;