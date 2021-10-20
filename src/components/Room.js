import { useParams } from "react-router-dom";
import Event from './Event';
import Random from '../util/Random';
import { Link } from 'react-router-dom';

function Room(props) {
  const { name } = useParams();

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      <h1>{found[0].name}</h1>
      <img src={found[0].image} alt="" />

      <p>{found[0].description}</p>

      <Event event={Random.selectEvent(props.events)} />

      <Link to="/hallway">
        <button>
          Back to Hallway
        </button>
      </Link>
    </div>
  );
}

export default Room;
