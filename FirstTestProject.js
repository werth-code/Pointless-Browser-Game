
    const scoreBoard = document.getElementsByClassName('score')
    const playingTo = document.getElementById('playingTo')
    const numberPick = document.getElementById('pickNumber')
    const reset = document.getElementById('resetButton')

    const score1display = scoreBoard[0]
    const score2display = scoreBoard[1]

    let score1 = 0
    let score2 = 0

    let maxClicks = 5

    let gameOver = false

    const P1 = document.getElementById('p1button')
    const P2 = document.getElementById('p2button')

    
    // set up reset button to clear fields.

    numberPick.addEventListener('change', () => {
        playingTo.textContent = numberPick.value
        maxClicks = Number(numberPick.value)
        resetScore()
    })


        P1.addEventListener('click', () => {
            if(!gameOver) {
                score1 += 1
                score1display.innerText = score1
            }
            
            if(score1 >= maxClicks) {
                gameOver = true
                score1display.classList.add('winner')
                alert('You Won Player 1!')
            }
        })

        P2.addEventListener('click', () => {
            if(!gameOver) {
                score2 += 1
                score2display.innerText = score2
            }

            if (score2 >= maxClicks) {
                gameOver = true
                score2display.classList.add('winner')
                alert('You Won Player 2!')
            }
        })

    reset.addEventListener('click', resetScore) 
    
    function resetScore() {
        score1 = 0
        score2 = 0
        score1display.textContent = 0
        score2display.textContent = 0
        score1display.classList.remove('winner')
        score2display.classList.remove('winner')
        gameOver = false
    }
