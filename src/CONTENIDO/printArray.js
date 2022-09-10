const myarray = ["uno", "dos", "tres"]

export const PrintLArray = ( ) => {
    return(
        <>
            <h1>Print Local Array</h1>
            <ol>
                {
                    myarray.map(
                        (item, key) =>
                        {
                            return <li key={key}>{item}</li>
                        }
                    )
                }
            </ol>
        </>
    )
}

export default PrintLArray;