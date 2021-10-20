import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Event from "./Event";
import Random from "../util/Random";
// import EventModal from "./EventModal";
// import "./Modal.css";

function Room(props) {
  const { name } = useParams();
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [beginEvent, setBeginEvent] = useState(true);
  // const [showDialog, setShowDialog] = useState(false);

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  // const renderNow = () => {
  //   setTimeout(() => {
  //     setShowDialog(true);
  //   }, 5000);
  // };

  // renderNow();
  // useEffect(() => {
  //   setTimeout(renderNow, 5000);
  // }, []);
  const handleBeginEvent = () => {
    setBeginEvent(true);
  }

  return (
    <div>
      {/* {showDialog && ( */}
        <Event
          event={Random.selectEvent(props.events)}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          hasGoldKey={hasGoldKey}
          setHasGoldKey={setHasGoldKey}
          hasSilverKey={hasSilverKey}
          setHasSilverKey={setHasSilverKey}
          setBeginEvent={setBeginEvent}
          beginEvent={beginEvent}
        />
      {/* )} */}

      <h1>{found[0].name}</h1>
      <img src={found[0].image} alt="" />

      <p>{found[0].description}</p>
      {/* {() => countDownTillRender} */}
      <button>Search Room</button>

      {(!isGameOver || !hasSilverKey) && (
        <a href="/hallway">
          <button className="backToHomeBtn" onClick={()=>handleBeginEvent}>Back to Hallway</button>
        </a>
      )}
    </div>
  );
}

export default Room;
