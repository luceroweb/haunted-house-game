import { useState } from 'react';
import ShowKey from './ShowKey';
//import KeyDisplay from './KeyDisplay';

function PresentKey(props) {
    const [presentSilverKey, setPresentSilverKey] = useState(false);



    
    return (
        <div className="btn-wrap">
            <button 
                className="presentKey" 
                onClick={()=> {
                    setPresentSilverKey(
                        props.hasSilverKey ? true : false
                        )
                    }
                }
            >
                Present Key
            </button> 
            {presentSilverKey && 
            <ShowKey
                hasGoldKey={props.hasGoldKey}
                hasSilverKey={props.hasSilverKey}
                setHasGoldKey={props.setHasGoldKey}
            />}
        </div>
    )
}

export default PresentKey;
