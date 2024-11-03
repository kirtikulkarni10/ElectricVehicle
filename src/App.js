import { useEffect , useState } from 'react';
import './App.css';
import Home from "./Home"
import Papa from "papaparse";
import dataCSV from "./Electric_Vehicle_Population_Data.csv" 

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(dataCSV)
    .then((response) => response.text())
    .then((text) => {
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setData(result.data); // Array of objects
        },
      });
    })
    .catch((error) => console.error("Error parsing CSV:", error));
  },[])

  return (
    <div>
      <Home data={data} />  
    </div>
  );
}

export default App;
