//Data is passed to components via props
function Heading(props){
    return (
        <>
            <h2>{props.headerText}</h2>
        </>
    );
}

export default Heading;