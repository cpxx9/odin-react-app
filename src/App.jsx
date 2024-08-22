import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let&apos;s check you in</h2>
      <label>
        First Name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issues to: <b>{fullName}</b>
      </p>
    </>
  );
}

// function CustomInput() {
//   const [value, setValue] = useState('');

//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={(event) => setValue(event.target.value)}
//     />
//   )
// }

// function App() {
//   const [person, setPerson] = useState({ name: 'John', age: 100 });

//   const handleIncreaseAge = () => {
//     setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
//     setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
//   };

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase Age</button>
//     </>
//   );
// }

export default App;
