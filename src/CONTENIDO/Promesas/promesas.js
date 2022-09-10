export const Promesas = () => {

    const CallPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Holaaa')
            resolve() //if it's ok

            reject()//if it's not ok
        }, 20)
    })

    CallPromise.then ( successData => {
        console.log("datos: "+successData) //si se ejecuta la promesa
    }).catch( error =>{
        console.log("error: "+error) //si sucede un error
    }).finally( some =>{
        console.log('siempre se ejecuta') //siempre al final
    })

    //Async Await
    const CallAsyncAwait = async() => {
        const api = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await( api.json() )
        console.log("Async Promise" + JSON.stringify(data) )
        return data; //if it's ok
    }
    CallAsyncAwait()

    //Promise async
    const CallPromiseAsync = () => {
        return new Promise( async (resolve, reject)=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await( api.json() )
            resolve(data)
        })
    }
    CallPromiseAsync()
    .then( inf => {
        console.log(inf)
    })

    return (
      <>
      
      </>
      )}
  export default Promesas;