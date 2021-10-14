import React from "react";
import MissionItem from "./MissionItem/MissionItem";

const MissionList = (props) => {
  return (
    <ul className="mission-list">
      {props.mission.map(item => {
        return (
          <MissionItem
            key={item.id}
            text={item.name}
            img={item.links}
            date={item.date_unix}
            details={item.details}
            date_unix={item.date_unix}
            successss={item.success}
          />
        )
      })}
    </ul>
  )
}

export default MissionList;
