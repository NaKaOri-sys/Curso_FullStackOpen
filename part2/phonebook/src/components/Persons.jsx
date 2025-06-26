import PersonLine from "./PersonLine";

const Persons = ({ persons }) => {
    return (
        <>
            {persons.map((p) => <PersonLine key={p.id ?? 1}  name={p.name} number={p.number}/>)}
        </>
    );
}

export default Persons;