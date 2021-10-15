import React from "react";

const ResultAction = (props) => {
	return props.i === props.selectedAction ? (
		<p>{props.action.response}</p>
	) : null;
};
export default ResultAction;
