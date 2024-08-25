import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';

function CustomInput({ placeholder, onChange, value }) {
  // const [value, setValue] = useState('');

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

function App() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Ham',
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  function handleFirstNameChange(e) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      firstName: e.target.value,
    }));
  }

  function handleLastNameChange(e) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      lastName: e.target.value,
    }));
  }

  return (
    <>
      <CustomInput
        placeholder={'First name'}
        onChange={handleFirstNameChange}
        value={person.firstName}
      />
      <CustomInput
        placeholder={'Last name'}
        onChange={handleLastNameChange}
        value={person.lastName}
      />
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}

export default App;
