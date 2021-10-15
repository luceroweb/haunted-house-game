import { useParams } from "react-router-dom";

function Room(props) {
  const { name } = useParams();

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      <h1>{found[0].name}</h1>
      <div>
        <img src={found[0].image} alt="" />
      </div>

      <p>{found[0].description}</p>
      <a href="/hallway">
        <button>
          Back to Hallway
        </button>
      </a>
    </div>
  );
}

export default Room;
