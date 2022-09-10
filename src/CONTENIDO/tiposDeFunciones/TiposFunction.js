export const TiposFunciones = () => {

    function OldRegularFunction(a, b) {
        return a + b;
    }

    const newRegularFunction = function (a, b) {
        return a + b;
    }

    const ArrowFunction = (a, b) => {
        return a + b;
    }

    console.log("Old Regular: "+OldRegularFunction(2,3))
    console.log("New Regular: "+newRegularFunction(2,3))
    console.log("Arrow: "+ArrowFunction(2,3))

    return (
      <>
      
      </>
      )}
  export default TiposFunciones;