export const Tenarios = () => {

    const myObject = {
        key: "First"
    }

    let result = false;
    if( myObject.key2){
        result = true;
    }

    result = myObject.key2 ? true: false;

    const result2 = myObject.key2 || "Nothing";
    const result3 = myObject.latlng?.lat || "empty";
    const result4 = myObject.key || "Sin key";

    console.log(result, result2, result3, result4)

    return (
      <>
      
      </>
      )}
  export default Tenarios;