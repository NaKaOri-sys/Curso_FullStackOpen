import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleCreatePerson = (event) => {
    setNewName(event.target.value);
  };
  const handleCreateNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const objPerson = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    };
    if (persons.find((p) => (p.name == newName))) {
      alert(`${newName} is already added to phonebook.`);
      return;
    }
    setPersons(persons.concat(objPerson))
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleCreatePerson}/>
        </div>
        <div>
          number: <input onChange={handleCreateNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => <p key={p.id ?? 1}>{p.name} {p.number}</p>)}
    </div>
  )
}

export default App