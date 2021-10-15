import React from "react";
import livingRoom from "../img/rooms/living-room.jpg";
import kitchen from "../img/rooms/kitchen-option.jpg";
import library from "../img/rooms/Room_Library.jpg";
const RoomData = [
  {
    name: "Livingroom",
    description:
      "Upon entering the living room you notice all the encrusted into the ripped old furniture. The floorboards creak with every step.  A sense of decay fills the room.",
    image: livingRoom,
  },
  {
    name: "Kitchen",
    description:
      "You have entered the kitchen. A pile of stagnant and molding dishes fills the sink. A carving knife covered in fresh blood and gore sits on the counter next to a pile of severed organs.",
    image: kitchen,
  },
  {
    name: "Library",
    description:
      "Books are in unkempt piles all over the room. Dust floats intermingled with the smell of old books. The skeleton of a long-dead avid reader is seated in the corner, still rocking slowly, clutching it’s favorite book in it’s dead hands, its mouth slightly agape in an eerie smile.",
    image: library,
  },
];
export default RoomData;
