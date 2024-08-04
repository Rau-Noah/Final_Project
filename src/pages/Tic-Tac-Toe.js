import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Styling/TicTacToe.css';

function TicTacToe() {
    const initialBoard = Array(9).fill(null);
    const [board, changeBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningCombos = useMemo(() => [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
    ], []);

    const didSomeoneWin = useCallback((board) => {
        for (let combination of winningCombos) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.every(cell => cell) ? 'Tie' : null;
    }, [winningCombos]);

    const isMovesLeft = (board) => {
        return board.some(cell => cell === null);
    };

    const minimaxAlg = useCallback((board, depth, goingForTheWin) => {
        const result = didSomeoneWin(board);
        if (result !== null) {
            if (result === 'X') {
                return 10 - depth;
            } else if (result === 'O') {
                return depth - 10;
            } else {
                return 0;
            }
        }

        if (goingForTheWin) {
            let bestScore = -Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'X';
                    bestScore = Math.max(bestScore, minimaxAlg(board, depth + 1, false));
                    board[i] = null;
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'O';
                    bestScore = Math.min(bestScore, minimaxAlg(board, depth + 1, true));
                    board[i] = null;
                }
            }
            return bestScore;
        }
    }, [didSomeoneWin]);

    useEffect(() => {
        const makeComputerMove = () => {
            if (!isMovesLeft(board) || winner) return;

            let bestMove = -1;
            let bestScore = -Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'X';
                    let moveScore = minimaxAlg(board, 0, false);
                    board[i] = null;
                    if (moveScore > bestScore) {
                        bestScore = moveScore;
                        bestMove = i;
                    }
                }
            }

            const randomFactor = Math.random();
            if (randomFactor < 0.3) {
                const availableMoves = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
                bestMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            }

            if (bestMove !== -1) {
                const newBoard = board.slice();
                newBoard[bestMove] = 'X';
                changeBoard(newBoard);
                setIsXNext(true);

                const gameResult = didSomeoneWin(newBoard);
                if (gameResult) {
                    setWinner(gameResult);
                }
            }
        };

        if (!isXNext && !winner) {
            makeComputerMove();
        }
    }, [board, isXNext, winner, minimaxAlg, didSomeoneWin]);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = 'O';
        changeBoard(newBoard);
        setIsXNext(false);

        const gameResult = didSomeoneWin(newBoard);
        if (gameResult) {
            setWinner(gameResult);
        }
    };

    const nextRound = () => {
        changeBoard(initialBoard);
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div class="bg-dark text-light min-vh-100">
            <div class="container pt-4 text-center">
                <h2>Tic-Tac-Toe</h2>
                <div class="board mt-4">
                    {board.map((cell, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            class="cell btn btn-secondary m-1"
                            disabled={cell || winner} 
                        >
                            {cell}
                        </button>
                    ))}
                </div>
                <h3>Are you ready for a challenge? Difficulty varies between rounds. </h3>
                <br></br>
                <h4>Instructions found below:</h4>
                <h5>This game plays like regular Tic-Tac-Toe, however, you always have to make the first move. Click one of the available spaces to put your 'O'.
                    The computer will then take its turn and move. The game will end if all spaces are filled or if three in a row has been made. Click the button that appears to
                    play another round!
                </h5>
                {winner && (
                    <div class="mt-4">
                        <h3>{winner === 'Tie' ? "It's a Tie! No Winner!" : `Winner: ${winner}`}</h3>
                        <button onClick={nextRound} class="btn btn-danger mt-2">Reset!</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TicTacToe;

