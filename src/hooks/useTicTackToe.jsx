import React from 'react'
import { useState } from 'react';

function useTicTackToe() {
    const initialBoard = () => Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard());
    const [isNext,setisNext]=useState(true);

    const winnerPattern=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        [2,4,6]
    ];

    const calculateWinner=(currentBoard)=>{
        for(let i=0; i<winnerPattern.length; i++){
            const [a,b,c] = winnerPattern[i];
            if(currentBoard[a] && currentBoard[a]==currentBoard[b] && currentBoard[b]==currentBoard[c]) return currentBoard[a];
        }
        return null;
    }

    const handleClick=(index)=>{
        const winner = calculateWinner(board)
        if(winner || board[index]) return 

        const newBoard = [...board];
        newBoard[index] = isNext ? "X" : "O";
        setBoard(newBoard);
        setisNext(!isNext);
    }

    const getStatusMessage = ()=>{
        const winner = calculateWinner(board);
        if(winner) return `player ${winner} wins !`
        if(!board.includes(null)) return "It's a draw"
        
        return `player ${ isNext ? "X" : "O"} turns`;
    }

    const resetMesage=()=>{
        setBoard(initialBoard());
        setisNext(true);
    }

  return {board,handleClick,getStatusMessage,resetMesage,calculateWinner}
}

export default useTicTackToe