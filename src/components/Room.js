import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Event from "./Event";

function Room(props) {
  const { name } = useParams();
  const [isGameOver, setIsGameOver] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [beginEvent, setBeginEvent] = useState(true);

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  const searchRoom = () => {
    setShowDialog(true);
    setBeginEvent(false);
  };

  return (
    <div id="room">
      <h1>{found[0].name}</h1>
      <div className="img-wrap">
        <img src={found[0].image} alt="" />
      </div>

      <p>{found[0].description}</p>
      {beginEvent && <button onClick={() => searchRoom()}>Search Room</button>}

      {(!isGameOver || !props.hasSilverKey) && (
        <div className="btn-wrap">
          <Link to="/hallway/4">
            <button
              className="backToHomeBtn"
              onClick={() => {
                setBeginEvent(true);
                props.onEventPass();
              }}
            >
              Back to Hallway
            </button>
          </Link>
        </div>
      )}
      <Event
        event={props.randomEvent}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        hasGoldKey={props.hasGoldKey}
        setHasGoldKey={props.setHasGoldKey}
        hasSilverKey={props.hasSilverKey}
        setHasSilverKey={props.setHasSilverKey}
        setBeginEvent={setBeginEvent}
        beginEvent={beginEvent}
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        events={props.events}
        audioOn={props.audioOn}
      />
    </div>
  );
}

export default Room;
