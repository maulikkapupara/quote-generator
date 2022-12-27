import { useState } from 'react';
import './App.css';
const App = () => {
  // const [quote, setQuote] = useState("");
  const [data, setData] = useState('');

  const getquotes = async () => {
    const fetchdata = await fetch(`https://type.fit/api/quotes`);
    const response = await fetchdata.json();

    let randomnum = Math.floor(Math.random() * response.length);

    setData(response[randomnum])

  };

  // getquotes()
  return (
    <>
      <div className="App">
        <h1 >Quote Generator App</h1>
        <div className='box'>
          <p>{data.text}</p>
          <p>{data.author}</p>
          <button onClick={getquotes} className='btn'>Click Heare</button>
        </div>
      </div>

    </>);

}

export default App;
