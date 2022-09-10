import PropTypes from 'prop-types'

//export const PropComponent = ( props ) => {
export const PropComponent = ( {title, sum} ) => {
    return(
        <>
            {/*<h1>{props.title}</h1>*/}
            <h1>{title}</h1>
            <span> {sum} </span>
        </>
    )
}
//PROPS VALIDATION
PropComponent.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

PropComponent.defaultProps = {
    title: "Define un título",
    sum: 0
}
export default PropComponent;