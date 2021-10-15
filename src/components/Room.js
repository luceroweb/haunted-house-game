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

      <h2>{found[0].description}</h2>
      <a href="/hallway">
        <button
          style={{
            width: "20%",
            height: "80px",
            backgroundColor: "grey",
            alignItems: "center",
            margin: "30px",
            fontSize: "20px",
            borderRadius: "10px",
          }}
        >
          Back to Hallway
        </button>
      </a>
    </div>
  );
}

export default Room;
