export const FetchINTERN = (consulturl) => {
    return new Promise( async (resolve, reject) => {
        const api = await fetch(consulturl);
        const data = await( api.json() );
        resolve(data);
        reject("error");
    })
}
export default FetchINTERN;