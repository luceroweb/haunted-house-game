import React, { useState } from "react";
import EventsData from "./EventsData.json"
function resultAction() {
  const [pass, setPass] = useState(False);
  const [showFail, setShowFail] = useState(false);
  const [showTryAgain, setTryAgain] = useState(false);
}

const pass = () => (
  <div>
    <p>Pass</p>
    <div>
      <button title="Ok" onPress={() => true} />
    </div>
  </div>
);

const Fail = () => (
  <div>
    <p>Fail</p>
    <div>
      <button title="Ok" onPress={() => true}></button>
    </div>
  </div>
);

const tryAgain = () => (
  <div>
    <p>Try Again</p>
    <div>
      <button title="Ok" onPress={() => true}></button>
    </div>
  </div>
);
return (
  <div>
    <button onClick={this.Pass}>Click on me</button>
    <button onClick={this.Fail}>Click on me</button>
    <button onClick={this.tryAgain}>Click on me</button>
  </div>
);

export default resultAction();
