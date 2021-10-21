import React, { useState } from "react";
import GameOver from "./GameOver";
import EventModal from "./EventModal";

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
  events,
}) => {
  const [action, setAction] = useState({});
  const [selectedAction, setSelectedAction] = useState(-1);
  const [hasChosenAction, setHasChosenAction] = useState(false);
  const [deathNote, setDeathNote] = useState("");

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
          events={events}
        />
      )}
      <GameOver isGameOver={isGameOver} message={deathNote} />
    </>
  );
};

export default Event;
