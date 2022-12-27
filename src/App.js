import { useState } from "react";
import "./App.css";
const App = () => {
  // const [quote, setQuote] = useState("");
  const [data, setData] = useState({
    text: "He is able who thinks he is able.",
    author: "Buddha",
  });

  const getquotes = async () => {
    const fetchdata = await fetch(`https://type.fit/api/quotes`);
    const response = await fetchdata.json();

    let randomnum = Math.floor(Math.random() * response.length);
    const resdata = response[randomnum];
    const quotedata = {
      text: resdata.text,
      author: resdata.author,
    };
    setData(quotedata);
    // console.log(response);
  };

  // getquotes()
  return (
    <>
      <div className="App">
        <h1>Quote Generator App</h1>
        <div className="box">
          <p>{data.text}</p>
          <p>{data.author}</p>
          <button onClick={getquotes} className="btn">
            Click Here To Change
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
