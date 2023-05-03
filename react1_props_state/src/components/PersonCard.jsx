const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.age}</p>
            <p>{props.color}</p>
        </div>
    )
}

export default PersonCard;