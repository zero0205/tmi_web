import {useState} from 'react';
import './App.css';
import 'axios';

function App() {
  let [inputValue, setInputValue] = useState("")
  function postToServer(){
    axios.post(inputValue)
    .then(function(response){
      alert(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <form action='POST'>
          <textarea type="text" placeholder='Plz input sentences you want to transform'
          style={{width:'500px', height:'300px'}}
            onChange={(e) => setInputValue(e.target.value)}>
          </textarea>
          <button type='submit'>Enter</button>
        </form>
        {inputValue}
      </header>
    </div>
  );
}

export default App;
