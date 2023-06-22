let firstCard = 9
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    if(sum <= 20) {
        message = "draw new card?"
    }else if(sum === 21) {
        message = "you've got blackJack!"
        hasBlackJack = true
    }else {
        message = "You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}





