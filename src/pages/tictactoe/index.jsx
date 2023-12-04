'use client';
import '@/styles/tictactoe/style.css';
import { useState } from 'react';
import Square from '@/components/tictactoe/square';
import StatusBox from '@/components/tictactoe/statusBox';
import Colors from '@/utils/pallete'

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    let winner = checkWinner(squares)
    let status = !winner ? "" : `El ganador es ${xIsNext ? "O" : "X"}`


    function checkWinner(squares) {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            // Explicacion magistral:
            // squares es una lista de nullos, hasta que se cambian a X/O terminando algo asi
            // squares = [null,null,null,X,O,X,O,X]
            // entonces al tomar [a,b,c] que son las condiciones de ganar deberan estar los valores en esas posiciones iguales
            // entonces:
            //     squares[a] --> es para ver si existe (no es nulo)
            //     squares[a] === squares[b] --> Es para ver si el primer y segundo valor son iguales
            //     squares[a] === squares[c] --> Es para ver si el primer y tercer valor son iguales
            // Al ser los 3 valores iguales significa que ganamos ya que completamos de tener
            // la condicion ganadora
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    }

    function handleClick(index) {
        if( squares[index] || checkWinner(squares) ) { return }
        const nextSquares = squares.slice();
        nextSquares[index] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }

    function restartGame(){
        winner = null
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }

    return (
        <div className='tictactoe-mainbody' style={{ backgroundColor: Colors.BackgroundColor }}>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <StatusBox statusMessage={status} onRestarGameClick={ () => restartGame() } />
        </div>
    );
}