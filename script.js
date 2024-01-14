console.log("Hello world from Javascript")

let computerChoices = ["Rock", "Paper", "Scissors"]

let getComputerChoice = () => {
    return computerChoices[(Math.floor(Math.random() * computerChoices.length ))]
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Try Again!"
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "It is a tie!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Won!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Try Again!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Won!"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "It is a tie!"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Won!"
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "It is a tie!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Try Again!"
    } else {
        return "Please input Correctly!"
    }
}

// let playerSelection = "Rock"


// console.log(playerSelection)

// console.log(playRound(playerSelection,computerSelection))

const game = () => {

    for (let i = 1; i <= 5 ; i++) {
        
    let sign = prompt("Choose Rock, Paper Or Scissors")

    if (sign.toLowerCase() === "rock") {
        value = "rock" , console.log("Rock")
    } else if (sign.toLowerCase() === "paper") {
        value = "paper", console.log("Paper")
    } else if (sign.toLowerCase() === "scissors") {
        value = "scissors", console.log("Scissors")
    } else {
        "Type in your choice", console.log("Type in your choice")
    }
        
    let computerSelection = getComputerChoice()

    console.log(computerSelection)
    // console.log(sign)
    let round = playRound(sign,computerSelection)
    console.log(round, i)
    }

}
game()


// let bye = () => {
//     return getComputerChoice()
// }
// let hi = bye()

// let greetings = function() {
//     for (let i = 0; i<5; i++) {
//     console.log(hi, i)
// }
// }

// greetings()

// let sign = prompt("Choose Rock, Paper Or Scissors")

// if (sign.toLowerCase() === "rock") {
//     value = "rock" , console.log("Rock")
// } else if (sign.toLowerCase() === "paper") {
//     value = "paper", console.log("Paper")
// } else if (sign.toLowerCase() === "scissors") {
//     value = "scissors", console.log("Scissors")
// } else {
//     "Type in your choice", console.log("Type in your choice")
// }

