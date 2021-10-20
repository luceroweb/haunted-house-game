import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Event from './Event';
import Random from '../util/Random';

function Room(props) {
  const { name } = useParams();
  const [isGameOver, setIsGameOver] = useState(false);	
  // const [hasGoldKey, setHasGoldKey] = useState(false);
	// const [hasSilverKey, setHasSilverKey] = useState(false);

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div id="room">
      <h1>{found[0].name}</h1>
      <div className="img-wrap">
        <img src={found[0].image} alt="" />
      </div>

      <p>{found[0].description}</p>

      <Event
        event={Random.selectEvent(props.events)}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        hasGoldKey={hasGoldKey}
        setHasGoldKey={setHasGoldKey}
        hasSilverKey={hasSilverKey}
        setHasSilverKey={setHasSilverKey}
      />

      {(!isGameOver || !hasSilverKey) &&
        <div className="btn-wrap">
          <Link to="/hallway">
            <button className="backToHomeBtn">
              Back to Hallway
            </button>
          </Link>
        </div>
      }
    </div>
  );
}

export default Room;
