import React from "react";
import { Button } from "./components/button/Button";
import "./Main.css";
import { BackendConnector } from "./service/BackendConnector";

export function App(): JSX.Element {
  async function onButtonPress(): Promise<void> {
    const response = await BackendConnector.getInstance().performTestRequest();
    alert(response.data.content);
  }

  return (
    <div className="app-container">
      <Button id="testButton" title="Press to test" onClick={onButtonPress} />
    </div>
  );
}
