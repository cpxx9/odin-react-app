import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { initialTravelPlan } from './data';

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

function App() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
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
