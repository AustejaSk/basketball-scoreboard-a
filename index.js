let homeStoreEl = document.getElementById("home-score-number")
let guestStoreEl = document.getElementById("guest-score-number")
let guestScore = 0
let homeScore = 0

function add1PointToHome() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function add2PointsToHome() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function add3PointsToHome() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function add1PointToGuest() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function add2PointsToGuest() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function add3PointsToGuest() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
    
function startNewGame() {
    homeStoreEl.textContent = 0
    guestStoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}