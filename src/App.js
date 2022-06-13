import "./App.css";
import axios from "axios";
import Simpsons from "./components/Simpsons";
import { useState } from "react";

function App() {
  const [simpson, setSimpson] = useState("");

  const getSimpsons = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpson(data[0]);
      });
  };
  return (
    <div className="App">
      <Simpsons simpson={simpson} />
      <button type="button" onClick={getSimpsons}>
        Simpsons Citations
      </button>
    </div>
  );
}

export default App;
