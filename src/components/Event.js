import React, { useState } from "react";
import ResultAction from "./ResultAction";



const Event = ({ event }) => {

	const [hasGoldKey, setHasGoldKey] = useState(false);
	const [hasSilverKey, setHasSilverKey] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	
	const [action, setAction] = useState({});
	const [newEventDisplay, selectNewEventDisplay] = useState("");
	const [selectedAction, setSelectedAction] = useState(-1);
	return (
		<div>
			<h3>{event.name}</h3>
			<img src={event.image} />
			<p>{event.description}</p>
			{event.actions.map((currentAction, i) => (
				<div key={i}>
					<button
						onClick={() => {
							setAction(currentAction);
							setSelectedAction(i);
						}}
					>
						{currentAction.action}
					</button>
					<ResultAction 
						i={i} 
						action={action} 
						selectedAction={selectedAction} 
						setHasSilverKey={setHasSilverKey}
						setHasGoldKey={setHasGoldKey}
					/>
				</div>
			))}
		</div>
	);
};

export default Event;
