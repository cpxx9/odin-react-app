import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { initialTravelPlan } from './data';

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

function App() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
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
