import React, { useState } from "react";
import ResultAction from "./ResultAction";
import GameOver from "./GameOver";

const Event = ({
  event,
  isGameOver,
  setIsGameOver,
  hasSilverKey,
  hasGoldKey,
  setHasGoldKey,
  setHasSilverKey,
}) => {
  const [action, setAction] = useState({});
  const [selectedAction, setSelectedAction] = useState(-1);

  return (
    <div className="modal" id="event">
      <h3>{event.name}</h3>
      <img src={event.image} alt="" />
      <p>{event.description}</p>
      {event.actions.map((currentAction, i) => (
        <div key={i}>
          {!isGameOver && (
            <button
              onClick={() => {
                setAction(currentAction);
                setSelectedAction(i);
              }}
            >
              {currentAction.action}
            </button>
          )}
          <ResultAction
            i={i}
            action={action}
            selectedAction={selectedAction}
            setHasSilverKey={setHasSilverKey}
            setHasGoldKey={setHasGoldKey}
            setIsGameOver={setIsGameOver}
            hasGoldKey={hasGoldKey}
            hasSilverKey={hasSilverKey}
          />
          <GameOver
            i={i}
            isGameOver={isGameOver}
            selectedAction={selectedAction}
            message={action.response}
          />
        </div>
      ))}
    </div>
  );
};

export default Event;
