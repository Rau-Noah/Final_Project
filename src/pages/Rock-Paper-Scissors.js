import React, { useState } from 'react';

function RockPaperScissors() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const [theUsersChoice, settheUsersChoice] = useState('');
    const [botChoice, setBotChoice] = useState('');
    const [result, setResult] = useState('');
    const [winnerJPG, setWinnerJPG] = useState('');
    const [winCount, setWinCounter] = useState(0);

    const getRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const whoWins = (user, bot) => {
        if (user === bot) {
            return "It's a tie!";
        } else if (
            (user === 'Rock' && bot === 'Scissors') ||
            (user === 'Paper' && bot === 'Rock') ||
            (user === 'Scissors' && bot === 'Paper')
        ) {
            setWinCounter(prevCount => prevCount + 1);
            return 'You win!';
        } else {
            return 'You lose!';
        }
    };

    const getWinnerJPG = (result, user, bot) => {
        if (result === "It's a tie!") {
            return '/Images/tie.jpg';
        } else if (result === 'You win!') {
            return getJpg(user);
        } else {
            return getJpg(bot);
        }
    };

    const getJpg = (choice) => {
        switch (choice) {
            case 'Rock':
                return '/Images/rock.jpg';
            case 'Paper':
                return '/Images/paper.jpg';
            case 'Scissors':
                return '/Images/scissors.jpg';
            default:
                return '';
        }
    };

    const handleClick = (choice) => {
        const botChoice = getRandomChoice();
        const result = whoWins(choice, botChoice);
        const winnerJPG = getWinnerJPG(result, choice, botChoice);
        settheUsersChoice(choice);
        setBotChoice(botChoice);
        setResult(result);
        setWinnerJPG(winnerJPG);
    };

    const resetScore = () => {
        setWinCounter(0);
        settheUsersChoice('');
        setBotChoice('');
        setResult('');
        setWinnerJPG('')
    };

    return (
        <div class="bg-dark text-light min-vh-100">
            <div class="container pt-4 text-center">
                <h2>Rock-Paper-Scissors</h2>
                <div class="mt-4">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            onClick={() => handleClick(choice)}
                            class="btn btn-primary m-2"
                        >
                            {choice}
                        </button>
                    ))}
                </div>
                {theUsersChoice && (
                    <div class="mt-4">
                        <h4>You Chose {theUsersChoice}</h4>
                        <h4>Computer Chose {botChoice}</h4>
                        <h3>{result}</h3>
                        {winnerJPG && (
                            <div>
                                <img src={winnerJPG} alt="Winner" style={{ width: '300px', height: '300px' }} />
                            </div>
                        )}
                    </div>
                )}
                <div class="mt-4">
                    <h4>Wins: {winCount}</h4>
                </div>
                <button onClick={resetScore} class="btn btn-danger mt-4">Reset Game</button>
                <br></br>
                Instructions found below:
                <br></br>
                This game plays like regular Rock-Paper-Scissors, however, to make your choice you must click one of the buttons with its corresponding label. The computer will
                make its decision at the same time as you. The game is continuous with no true ending. Keep making choices to play new rounds, if you want to reset your score click the reset button.
            </div>

        </div>
    );
}

export default RockPaperScissors;
