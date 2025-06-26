const PersonForm = ({person}) => {
    return (
        <form onSubmit={person.addPerson}>
            <div>
                name: <input onChange={person.handleCreatePerson} />
            </div>
            <div>
                number: <input onChange={person.handleCreateNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default PersonForm;