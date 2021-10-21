import React, { useState } from "react";
import ResultAction from "./ResultAction";
import GameOver from "./GameOver";
import EventModal from "./EventModal";
import "./Modal.css";

const Event = ({
  event,
  isGameOver,
  setIsGameOver,
  hasSilverKey,
  hasGoldKey,
  setHasGoldKey,
  setHasSilverKey,
  setShowDialog,
  showDialog,
  setBeginEvent,
  beginEvent,
}) => {
  const [action, setAction] = useState({});
  const [selectedAction, setSelectedAction] = useState(-1);
  const [hasChosenAction, setHasChosenAction] = useState(false);
  const [deathNote, setDeathNote] = useState("");

  const displayEvent = () => {
    setShowDialog(true);
  };

  const closeEvent = () => {
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && (
        <EventModal
          event={event}
          isGameOver={isGameOver}
          setAction={setAction}
          setSelectedAction={setSelectedAction}
          selectedAction={selectedAction}
          setHasSilverKey={setHasSilverKey}
          setHasGoldKey={setHasGoldKey}
          setIsGameOver={setIsGameOver}
          hasGoldKey={hasGoldKey}
          hasSilverKey={hasSilverKey}
          closeEvent={closeEvent}
          setDeathNote={setDeathNote}
          setShowDialog={setShowDialog}
          action={action}
          hasChosenAction={hasChosenAction}
          setHasChosenAction={setHasChosenAction}
        />
      )}
      <GameOver
        // i={i}
        isGameOver={isGameOver}
        // selectedAction={selectedAction}
        message={deathNote}
      />
    </>
  );
};

export default Event;

{
  /* <div className="event-modal" id="event">
<div style={{ margin: "0" }}>
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
        setDeathNote={setDeathNote}
      />
    </div>
  ))}
</div>
</div> */
}
