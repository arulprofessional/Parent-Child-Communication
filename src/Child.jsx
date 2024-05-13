import './App.css';

export default function Child(props) {
  return (
    <div className="card">
      <h2>Child</h2>
      <p>{props.dataForChild}</p>
      <input type="text" onChange={props.onChange} />
    </div>
  );
}
