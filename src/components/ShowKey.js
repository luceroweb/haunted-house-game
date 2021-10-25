import GameWon from "./GameWon";
import FalseEnding from "./FalseEnding";
import { useHistory } from "react-router-dom";

// triggers when hasGoldKey or hasSilverKey are true
  export default function ShowKey (props) {
    const history = useHistory();
    var winMessage = '';
    // fake key and keep playing
    if (props.hasGoldKey) {
      
    }
    // real key and win
    else if (props.hasSilverKey) {
      winMessage= <GameWon audioOn={props.audioOn} />
    }
    else {
      winMessage='';
    }
    return (
      <div>
        {winMessage}
        {props.hasGoldKey && 
        history.push("/falseending")
        
        // <div className="btn-wrap">
        //   <button onClick={()=>props.setHasGoldKey(false)}>Keep trying</button>
        // </div>
        }
      </div>
    );
  };