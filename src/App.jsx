import './App.css';

function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + ' ✔' : name}</li>;
}

function App() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with gold tie" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export default App;
