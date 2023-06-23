let firstCard = 9
let secondCard = 12
let sum = firstCard + secondCard
let cards = [firstCard, secondCard] // array an ordered list of items
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // render out first and second card
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out all the cards
    sumEl.textContent = "Sum: " + sum
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

function newCard() {
    console.log("Drawing new card")
    let card = 5
    sum += card
    renderGame()
}





