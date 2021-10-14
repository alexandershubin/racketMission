import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoading} from "../../store/reducers/selector";
import {fetchMission} from "../../store/reducers/store";
import MissionList from "./MissionList/MissionList";
import "./Mission.scss"

const Mission = ({mission}) => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const [array, setArray] = useState([] || [...mission]);

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  useEffect(() => {
    setArray([...mission].reverse());
  }, [mission])

  const handleButtonUp = () => {
    setArray([...mission])
  }

  const handleButtonDown = () => {
    setArray([...mission].reverse())
  }

  return (
    <>
      {!loading &&
      <div className="wrapper">
        <div className="mission-btn">
          <button onClick={() => handleButtonUp()} className="mission-btn__up">по возрастанию</button>
          <button onClick={() => handleButtonDown()} className="mission-btn__down">по убыванию</button>
        </div>
        <MissionList mission={array}/>
      </div>}
    </>
  )
}

export default Mission;
