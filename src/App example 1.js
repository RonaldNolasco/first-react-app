import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'John';
  const lastName = 'Wick';
  const age = '28';
  const job = 'Gentleman';
  const extra = ':)';

  const mArr = [1, 2, 3, 4]
  const mObj = {
    name: 'Toto',
    age: 30
  }

  const inputPlaceholder = 'Enter Your Details'

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }

  const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete />;

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h3>Full Name: {firstName + ' ' + lastName}</h3> */}
      <h3>Full Name: {getFullName(firstName, lastName)}</h3>
      {/* <p>Age: {age}</p> */}
      <p>Age: {mObj.age}</p>
      <p>Job: {`${job} ${extra}`}</p>

      {/* <input placeholder={inputPlaceholder} autoComplete /> */}
      {detailsInputBox}

      <br /><br />
      {mArr[1]}

      <br /><br />
      {
        mArr[0] > 0 ? "True" : "False"
      }

    </div>
  );
}

export default App;
