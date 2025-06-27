import PersonLine from "./PersonLine";

const Persons = ({ persons, handleDeletePerson }) => {
    return (
        <>
            {persons.map((p) =>
                <div key={p.id ?? 1}>
                    <PersonLine name={p.name} number={p.number} handleDeletePerson={() => handleDeletePerson.deletePerson(p.id)}/>
                </div>
            )}
        </>
    );
}

export default Persons;