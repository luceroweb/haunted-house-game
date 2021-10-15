// triggers when hasGoldKey or hasSilverKey are true
  export default function ShowKey (props) {
    var winMessage = '';
    // fake key and keep playing
    if (props.hasGoldKey) {
      winMessage=`The group makes their way to the front door.  Juan takes the key out of his pocket and inserts it into the keyhole, but just as the tip of the key touches the lock, it smashes into the lock, the gold wrapping peels away and reveals semi-melted chocolate.`;
    }
    // real key and win
    else if (props.hasSilverKey) {
      winMessage=`You return to the group with the key.  The cage containing Juan and the rest of the team lifts.  The team rushes out of the cage, and passes you to the door.  As you hold out the key, the group parts and you spot the door.  You insert the key into the keyhole and turn.  As the door unlocks, you push the heavy door open.  Fresh air rushes past you and into the house.  You and the team spill out into the street as you spot a figure strolling up the street to the house.
      
      “Irma?! What are you doing here?!” Eyob questions.
      
      “Hi everyone.  You’re early for the Bitwise Haunted House!” Irma says, a smile plastered on her face as she points to the small “Bitwise Industries” sign just above the doorway.`;
    }
    else {
      winMessage='';
    }
    return (
      <div>
        <p>{winMessage}</p>
      </div>
      // leaving this message will change hasGoldKey and hasSilverKey states to false
    );
  };