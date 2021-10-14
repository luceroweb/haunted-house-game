import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [rooms, setRooms] = useState([
    {
      name: "Living Room",
      description: "living room description goes here",
      image: logo,
    },
    {
      name: "Kitchen",
      description: "kitchen description goes here",
      image: logo,
    },
  ]);

  const [events, setEvents] = useState([
    {
      name: "Ghost",
      description: "ghost description goes here",
      image: logo,
      actions: [
        { pass: 'pass goes here' },
        { fail: 'fail goes here, goes into fail screen' }, 
        { redo: 'try again goes here' },
      ]
    },
    {
      name: "Warewolf",
      description: "warewolf description goes here",
      image: logo,
      actions: [
        { pass: 'pass goes here' },
        { fail: 'fail goes here, goes into fail screen' }, 
        { redo: 'try again goes here' },
      ]
    },
  ]);
  
  // shows gameOver success or fail screen when player gets key
  const presentKey = () => {
    const winMessage = '';
    // fake key and keep playing
    if (hasGoldKey) {
      winMessage='The group makes their way to the front door.  Juan takes the key out of his pocket and inserts it into the keyhole, but just as the tip of the key touches the lock, it smashes into the lock, the gold wrapping peels away and reveals semi-melted chocolate.';
      setHasGoldKey(false);
    }
    // real key and win
    else if (hasSilverKey) {
      winMessage=`"You return to the group with the key.  The cage containing Juan and the rest of the team lifts.  The team rushes out of the cage, and passes you to the door.  As you hold out the key, the group parts and you spot the door.  You insert the key into the keyhole and turn.  As the door unlocks, you push the heavy door open.  Fresh air rushes past you and into the house.  You and the team spill out into the street as you spot a figure strolling up the street to the house.
      
      “Irma?! What are you doing here?!” Eyob questions.
      
      “Hi everyone.  You’re early for the Bitwise Haunted House!” Irma says, a smile plastered on her face as she points to the small “Bitwise Industries” sign just above the doorway."`;
      setHasSilverKey(false);
      setGameOver(true);
      // when gameOver is true, show appropriate ending using if condition and function or ternary conditional rendering
    }
    // keep playing
    else {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
