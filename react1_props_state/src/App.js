import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard title="Doe, Jane" age="Age: 45" color="Hair Color: Black"/>
      <PersonCard title="Smith, John" age="Age: 88" color="Hair Color: Brown"/>
      <PersonCard title="Fillmore, Millard" age="Age: 50" color="Hair Color: Brown"/>
      <PersonCard title="Smith, Maria" age="Age: 62" color="Hair Color: Brown"/>
    </div>
  );
}

export default App;
