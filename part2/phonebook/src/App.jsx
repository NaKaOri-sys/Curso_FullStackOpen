import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const hook = () => {
    personService
      .getAll()
      .then(res => {
        setPersons(res);
      });
  };
  useEffect(hook, []);
  const handleCreatePerson = (event) => {
    setNewName(event.target.value);
  };
  const handleCreateNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterNumbers = (event) => {
    let val = event.target.value;
    const filteredNumbers = persons.filter((p) => (p.name.toLocaleLowerCase().includes(val)));
    setPersons(filteredNumbers);
  };
  const addPerson = (event) => {
    event.preventDefault();
    const objPerson = {
      name: newName,
      number: newNumber
    };
    if (persons.find((p) => (p.name == newName))) {
      alert(`${newName} is already added to phonebook.`);
      return;
    }
    personService.post(objPerson).then(res => {
      setPersons(persons.concat(res))
    })
  };
  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}`)) {
      personService.deleteHttp(id).then(res => {
        console.log('Delete successful: ', res);
      }).catch(res => {
        alert('No person is registered with the given request ID.')
      });
    }
  };
  let handleDeletePerson = { deletePerson };
  let handleEventsForm = {
    handleCreateNumber,
    handleCreatePerson,
    addPerson
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterNumbers={handleFilterNumbers} />
      <h2>add a new</h2>
      <PersonForm person={handleEventsForm} />
      <h2>Numbers</h2>
      <Persons persons={persons} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App