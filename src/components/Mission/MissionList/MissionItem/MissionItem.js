import React from "react";
import {timeConverter, yearsConverter} from "../../../utils/utils";

const MissionItem = (props) => {
  const availableYears = yearsConverter(props.date_unix) > 2014 && yearsConverter(props.date_unix) < 2020;
  return (
    <>
      {availableYears && props.successss &&
      <li className="mission-list__item">
        <img className="mission-list__img" src={props.img.patch.small} alt="image"/>
        <div className="mission-list__content">
          <h2 className="mission-list__title">{props.text}</h2>
          <p className="mission-list__description">{props.details}</p>
          <time className="mission-list__time"><b>{timeConverter(props.date)}</b></time>
        </div>
      </li>
      }
    </>

  )
}

export default MissionItem;
