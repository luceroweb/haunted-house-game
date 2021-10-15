import React, { useState } from "react";
import ResultAction from "./ResultAction";

const Event = ({ event }) => {
	//const [event, setEvent] = useState();
	const [action, setAction] = useState({});
	const [newEventDisplay, selectNewEventDisplay] = useState("");
	const [selectedAction, setSelectedAction] = useState(-1);
	//const [gamePlay, setGamePlay] = useState(game.display)
	//const generateList = events.map((event, )) => {}

	//const selectedEvent = Random.selectEvent()
	//setEvent(selectedEvent);
	//setNewEventDisplay('');
	console.log(event);

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
					<ResultAction i={i} action={action} selectedAction={selectedAction} />
				</div>
			))}
		</div>
	);
};

export default Event;
