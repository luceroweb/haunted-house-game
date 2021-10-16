import { useState } from "react";
import { useParams } from "react-router-dom";
import Event from './Event';
import Random from '../util/Random';

function Room(props) {
  const { name } = useParams();
  const [isGameOver, setIsGameOver] = useState(false);	const [hasGoldKey, setHasGoldKey] = useState(false);
	const [hasSilverKey, setHasSilverKey] = useState(false);

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      <h1>{found[0].name}</h1>
      <img src={found[0].image} alt="" />

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
        <a href="/hallway">
          <button className="backToHomeBtn" >
            Back to Hallway
          </button>
        </a>
      }
    </div>
  );
}

export default Room;
