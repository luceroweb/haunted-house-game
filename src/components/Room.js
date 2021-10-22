import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Event from "./Event";
import Random from "../util/Random";

function Room(props) {
  const { name } = useParams();
  const [isGameOver, setIsGameOver] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [beginEvent, setBeginEvent] = useState(true);
  const [randomEvent, setRandomEvent] = useState({});

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  const searchRoom = () => {
    setRandomEvent(Random.selectEvent(props.events));
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
          <Link to="/hallway/1">
            <button
              className="backToHomeBtn"
              onClick={() => setBeginEvent(true)}
            >
              Back to Hallway
            </button>
          </Link>
        </div>
      )}
      <Event
        event={randomEvent}
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

      {(!isGameOver || !props.hasSilverKey) && (
        <Link to="/">
          <button className="backToHomeBtn">Restart Game!</button>
        </Link>
      )}
    </div>
  );
}

export default Room;
