const PersonLine = ({ name, number,  handleDeletePerson}) => {
    return (
        <div>
            <p>{name} {number} <button onClick={handleDeletePerson}>delete</button></p>
        </div>
    );
};

export default PersonLine;