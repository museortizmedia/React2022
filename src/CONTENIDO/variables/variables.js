export const Variables = () => {

    var nombre = 'Diego';
    const apellido = 
    `
    Ortiz
    Hurtado
    `;
    let edad = 24;
    console.log('Se crearon variables: '+`var: ${nombre} const: ${apellido} let: ${edad}`)
    if(true){
        var nombre = 'Pedro'; //siempre se sobreescribe
        const apellido = 'Perez'; //no se sobreescribe
        let edad = 20; //funciona en bloque
        console.log('variables sobreescritas: '+nombre, apellido, edad)
    }
    console.log('Variables al final: '+nombre,apellido,edad)
    return (
      <>
      
      </>
      )}
  export default Variables;