import './App.css';

function Item(props) {
  let itemContent = props.name;
  if (props.isPacked) {
    itemContent = <del>{props.name + ' ✔'}</del>;
  }

  return <li className="item">{itemContent}</li>;
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
