import { useState } from 'react'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleCreatePerson = (event) => {
    setNewName(event.target.value);
  };
  const handleCreateNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterNumbers = (event) =>{
    let val = event.target.value;  
    const filteredNumbers = persons.filter((p) => (p.name.toLocaleLowerCase().includes(val)));
    setPersons(filteredNumbers);
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
  let handleEventsForm = {
    handleCreateNumber,
    handleCreatePerson,
    addPerson
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterNumbers={handleFilterNumbers}/>
      <h2>add a new</h2>
      <PersonForm person={handleEventsForm} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App