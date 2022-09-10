
export const FuncComponent = ( {title, sum} ) => {
    const btn_onclick = () => {
        console.log('botón tocado')
    }
    return(
        <>
            <h1>{title}</h1>
            <span> {sum} </span>
            <button onClick={btn_onclick}>
                Tócame
            </button>
        </>
    )
}

export default FuncComponent;