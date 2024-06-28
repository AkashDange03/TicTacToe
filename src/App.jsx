import React from "react"
import { useState } from "react";
import useTicTackToe from "./hooks/useTicTackToe";
function App() {
 
  const {board,handleClick,getStatusMessage,calculateWinner,resetMesage} = useTicTackToe();
  return (
    <>
      <div className="container">
        <div className="status">
            <h1>{getStatusMessage()}</h1>
            <button onClick={resetMesage}>Reset</button>
        </div>

        <div className="board">
          {
            board.map((b, index) => (
              <button className="cell" key={index} onClick={()=>handleClick(index)} disabled={b!==null}>{b}</button>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
