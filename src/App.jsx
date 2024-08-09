import { useState } from "react";
import "./App.css";
import Wheater from "./Wheater";
import Table from "./Table";

function App() {
  const [currentStatus, setCurrentStatus] = useState(null);

  let handlePage = (currentStatus) => {
      if (currentStatus === 1) {
         return (
         <Wheater/>
        );
      }
      if (currentStatus === 2) {
        return ( <Table/> );
      }
  }

  return (
    <>
    {currentStatus ? (
      handlePage(currentStatus)
    ):(
      <>
      <div>
      <h1>Weather Forcast App</h1>
     </div>
      <button onClick={() =>setCurrentStatus(1)} className="show">TOP 7 CITIES WEATHER REPORT</button>
      <button onClick={() =>setCurrentStatus(2)} className="show">WEATHER INDEX</button></>
    )}
    </>
  );
}

export default App;
