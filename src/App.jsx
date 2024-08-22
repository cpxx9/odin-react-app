import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}

export default App;
