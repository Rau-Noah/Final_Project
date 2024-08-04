import React, { useState, useEffect } from 'react';
import './Styling/Match.css';

const table = () => {
    const values = Array(8).fill().map((_, i) => i + 1);
    return values.concat(values).map(value => ({ value, id: Math.random() }));
};

const layout = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Card = ({ index, value, isFlipped, onClick }) => {
    
    const cardFront = (
        <>
            ╔╦═╦════╦╦═══╗<br />
            ║║╔╬═╦═╦╝╠══╗║<br />
            ║║╚╬╝║╠╣║╠╗╚╣║<br />
            ║╚═╩═╩╝╚═╩══╝║<br />
            ╚════════════╝
        </>
    );

    return (
        <div class={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(index)}>
            <div class="card-bottom">
                <div class="card-front">
                    {cardFront}
                </div>
                <div class="card-back">
                    {value}
                </div>
            </div>
        </div>
    );
};

const Match = () => {
    const [cards, setCards] = useState(layout(table()));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (cards[firstCard].value === cards[secondCard].value) {
                setMatchedCards([...matchedCards, firstCard, secondCard]);
            }

            setTimeout(() => setFlippedCards([]), 1000);
        }
    }, [flippedCards, cards, matchedCards]);

    const handleCardClick = (index) => {
        if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
            setFlippedCards([...flippedCards, index]);
        }
    };

    const resetGame = () => {
        setCards(layout(table()));
        setFlippedCards([]);
        setMatchedCards([]);
    };

    return (
        <div class="bg-dark text-light min-vh-100">
            <div class="container pt-4 text-center">
                <div class="col-12 text-center py-4">
                    <h2>Match!</h2>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <div class="display">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                index={index}
                                value={card.value}
                                isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                                onClick={handleCardClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div class="container pt-4 text-center">
            <button onClick={resetGame} class="btn btn-danger btn-lg mt-4">Reset</button>
                <br></br>
                <h4 class ="text-center">Instructions found below:</h4>
                <h5 class ="text-center">Click two cards to see if they match, if they do not match you need to memorize the cards and then flip two others. Match all the cards to win and then reset the game to play again.
                </h5>
            </div>
        </div>
    );
};


export default Match;