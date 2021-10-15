import React, { useState } from 'react';

function FindKey(props){   

    const changeTwoStates = () => {
        setHasGoldKey(true);
        setHasSilverKey(true);
    }    

    return(        
        <div>
            {changeTwoStates}
        </div>
    )

};

export default FindKey;

