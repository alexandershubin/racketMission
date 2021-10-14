import React from "react";
import {selectMission} from "../store/reducers/store";
import {useSelector} from "react-redux";
import Mission from "./Mission/Mission";

function App() {
  const mission = useSelector(selectMission);

  return (
    <>
      <div className="container">
        <Mission mission={mission}/>
      </div>
    </>
  )
}

export default App;
