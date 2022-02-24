import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState(
    [{ squares: Array(9).fill(null) }] //history.square = [null,null,null,null,null,null,null,null,null]
  );

  console.log(history);
  const [stepNumber, setStepNumber] = useState(0);

  const [xIsNext, setXISNext] = useState(true);
  //
  //
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // 세개 다 true여야 실행
        return squares[a];
      }
      return null;
    }
  }
  //
  //
  //
  function handleClick(i) {
    const customHistory = history.slice(0, stepNumber + 1);
    const current = customHistory[customHistory.length - 1]; // customHistory의 마지막 인덱스 값
    const squares = current.squares.slice(); // customHistory의 마지막 인덱스 값인 배열값 복사

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(customHistory.concat([{ squares: squares }]));
    setStepNumber(customHistory.length);
    setXISNext(!xIsNext);
  }
  //
  //
  function jumpTo(step) {
    setStepNumber(step);
    setXISNext(step % 2 === 0);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move#" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player:" + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
