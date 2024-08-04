import React from 'react';


function Info () {
    return (
        <div class="bg-dark min-vh-100 justify-content-center align-items-center p-4 text-light">
            <h1 class="text-center">Info on Functions</h1>
            <br></br>
            <br></br>
            <h2 class="text-center">This section will go over the parts of my project that I think were the coolest to make.</h2>
            <br></br>
            <h3 class ="text-center">The games I designed all had very intricate functions that had several cool aspects to them. The first game I will disucss is the easiest game to make,
                that game was Rock-Paper-Scissors. </h3>
            <br></br>
            <h2 class="text-center">Rock-Paper-Scissors </h2>
            <div class="text-center">
                <img src="/Images/rps.jpg" alt="Rock-Paper-Scissors" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            
            <h3 class= "text-left"> The game of Rock-Paper-Scissors in real life consists of each player throwing their hand in a specific shape at the same time to determine a winner.
                Seeing that my web application does not have any physical hands, I had to design a similar function to do this. The function that I designed relied on an array of its three choices
                as well as a piece of code that told it to choose randomly; "const randomIndex = Math.floor(Math.random() * choices.length);
                return choices[randomIndex];". This also helped keep the game fair because the computer is making choices based on the same amount of knowledge as the player. This means when the player
                clicks a button their choice is locked in and then compared to the computer. The game needs to decide who wins; this is based off the following logic.
            </h3>
            <h3 class= "text-left"> 
            "(user === 'Rock' && bot === 'Scissors') ||
            (user === 'Paper' && bot === 'Rock') ||
            (user === 'Scissors' && bot === 'Paper')"
            </h3>
            <br></br>
            <h2 class="text-center">Tic-Tac-Toe</h2>
            <div class="text-center">
                <img src="/Images/ttt.jpg" alt="Rock-Paper-Scissors" style={{ maxWidth: '75%', height: 'auto' }} />
            </div>
            <h3 class="text-left">The game of Tic-Tac-Toe that I created follows the same general ruleset as the actual game. The only difference is that the user always moves first.
                The computer will always make its decision after the user and attempt to either win or tie. When I first produced this game, it was too easy, and the players often won. The
                computer made random moves and had no real desire to win. To change this, I had to implement a form of intelligence. This was first done by using minimax algorithm. This was too 
                strong of an algorithm when first used by itself. I had to add a degree of randomness to the algorithm to let the computer make mistakes when playing against the player, 
                otherwise the player lost or tied every time. The randomness function told the computer it had to sometimes make a less optimal move. This happens at random intervals.
                Another key part to the game was deciding when the game ended. The game had to end if all spots were filled or if a winning combination was made. To do this I established a function that looked
                at available moves and another that looked at winning combinations. To determine this an array was used numbering 0-8. I then went through and noted all combinations that result in a win.
            </h3>
            <br></br>
            <h2 class="text-center">Match!</h2>
            <h3 class="text-left">Matching is a single player game that involves matching number cards that have been shuffled and mixed across the play area. This was done with the help of css and some functions. In the css file I made it possible to flip the
                cards. I then made a function that told the game that only two cards can be flipped at once. It then compares the values on the cards, if they are not the same a timeout feature occurs and the cards flip back over. </h3>
        </div>
    );
};
export default Info;