import './App.css';
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [timesChanged, setTimesChanged] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setTimesChanged(timesChanged + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2>Times Changed: {timesChanged}</h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
