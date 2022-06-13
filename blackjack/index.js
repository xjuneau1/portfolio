
let sum = 0
let cards = []
let message = ''

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let messageEl = document.querySelector("#message-el")

let hasBlackJack = false
let isAlive = false

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    messageEl.textContent = message
    renderGame()

}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let newCards = getRandomCard()
    sum += newCards
    cards.push(newCards)
    renderGame()
    }
} 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    
}