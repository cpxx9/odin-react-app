import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState(items[0]);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        }
        return item;
      }),
    );
  }

  return (
    <>
      <h2>What&apos;s your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{' '}
            <button
              onClick={() => {
                setSelectedItems(item);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItems.title}.</p>
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
