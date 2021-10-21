import React, { useState} from "react";
import ResultAction from "./ResultAction";
import GameOver from "./GameOver";
import "./Modal.css";

const Event = ({
  event,
  isGameOver,
  setIsGameOver,
  hasSilverKey,
  hasGoldKey,
  setHasGoldKey,
  setHasSilverKey,
  beginEvent,
  setBeginEvent,
}) => {
  const [action, setAction] = useState({});
  const [selectedAction, setSelectedAction] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);

  const displayEvent = (time) => {
    setTimeout(() => {
      setShowDialog(true);
    }, time);
  };

  const closeEvent = (time) => {
    setTimeout(() => {
      setShowDialog(false);
    }, time);
  };

  if (beginEvent) {
    displayEvent(5000);
    setBeginEvent(false);
  }

  return (
    <>
      {showDialog && (
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
                closeEvent={closeEvent}
                name={event.name}
                setShowDialog={setShowDialog}
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
      )}
    </>
  );
};

export default Event;
