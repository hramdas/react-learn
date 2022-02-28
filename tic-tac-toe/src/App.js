import { useEffect, useState } from "react";
import "./App.css";

import { Square } from "./components/Square";
const initialBoard = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [board, setBoard] = useState(initialBoard);
  const [Xstatus, setXstatus] = useState(true);

  const handleClick = (i) => {
    if (board[i]) return;

    const boardStrings = Array.from(board);
    boardStrings[i] = Xstatus ? "x" : "o";
    setBoard(boardStrings);

    setXstatus(!Xstatus);
  };
  useEffect(() => {
    let res = checkResult();
    if (res) {
      alert(res + " is winner");
      setBoard(initialBoard);
    }
  }, [board]);

  const checkResult = () => {
    const results = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < results.length; i++) {
      const [a, b, c] = results[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setBoard(initialBoard);
  };

  return (
    <div className="App">
      <p>Tic Tac Toe</p>
      <div className="MainBox">
        <span>
          <Square
            onClick={() => handleClick(0)}
            state={board[0]}
            className="box"
          />
          <Square
            onClick={() => handleClick(1)}
            state={board[1]}
            className="box"
          />
          <Square
            onClick={() => handleClick(2)}
            state={board[2]}
            className="box-3"
          />
        </span>
        <span>
          <Square
            onClick={() => handleClick(3)}
            state={board[3]}
            className="box"
          />
          <Square
            onClick={() => handleClick(4)}
            state={board[4]}
            className="box"
          />
          <Square
            onClick={() => handleClick(5)}
            state={board[5]}
            className="box-3"
          />
        </span>
        <span>
          <Square
            onClick={() => handleClick(6)}
            state={board[6]}
            className="bottom-box"
          />
          <Square
            onClick={() => handleClick(7)}
            state={board[7]}
            className="bottom-box"
          />
          <Square
            onClick={() => handleClick(8)}
            state={board[8]}
            className=""
          />
        </span>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
