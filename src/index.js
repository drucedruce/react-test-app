import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/board";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board mx-auto">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

root.render(<Game />);
