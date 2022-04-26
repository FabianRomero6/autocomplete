import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';

const App = () => {
  return (
    <div className="App">
      <h1>Custom Autocomplete React</h1>
      <div className='auto-container'>
        <AutoComplete />
      </div>
    </div>
  );
}

export default App;
