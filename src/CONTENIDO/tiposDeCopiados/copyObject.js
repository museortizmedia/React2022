export const CopyMode = () => {

    const myCar ={
        make: 'Ford',
        model: 'Mustang',
        year: 1669,
        city: {
            name: 'Colombia',
            latlng: {
                lat: 123,
                lng: 456
            }
        }
    }
    const secondCar = myCar;
    const thirdCar = {...myCar}
    secondCar.make = 'Toyota' //second haciendo referencia al objeto 1
    thirdCar.make = 'Chevrolet' //tercero haciendo copia profunda como otro objeto real
    console.log(myCar, secondCar, thirdCar)

    //Asignamiento de desestructuración
    const [a, b] = [10, 20];

    const {name: university, city} = {name: "Autónoma", city: "Cali"};

    console.log(a)
    console.log(university)

    return (
      <>
      
      </>
      )}
  export default CopyMode;