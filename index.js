const fs = require("fs")

var player1 = []
var player2 = []
var player3 = []

var outputString = ""

var player1_wins = 0
var player2_wins = 0
var player3_wins = 0


var player1_draws = 0
var player2_draws = 0
var player3_draws = 0

var player1_loss = 0
var player2_loss = 0
var player3_loss = 0

for (let x = 0; x < 99 + 1; x++) {
    outputString = outputString +"\n\nRound "+x+":"
    for (let i = 0; i < 10; i++) {
        let randomNum1 = Math.floor(Math.random() * 20) + 1
        let randomNum2 = Math.floor(Math.random() * 10) + 1
        if((randomNum1 + randomNum2) > 18) {
            if(player1.length == 0) {
                player1.push(1)
            } else {
                player1.push(player1.at(-1) + 1)
            }
        } else {
            if(player1.length == 0) {
                player1.push(0)
            } else {
                player1.push(player1.at(-1))
            }
        }
        
        randomNum1 = Math.floor(Math.random() * 20) + 1
        randomNum2 = Math.floor(Math.random() * 10) + 1
        if((randomNum1 % randomNum2) == 0) {
            if(player2.length == 0) {
                player2.push(1)
            } else {
                player2.push(player2.at(-1) + 1)
            }
        } else {
            if(player2.length == 0) {
                player2.push(0)
            } else {
                player2.push(player2.at(-1))
            }
        }
        
        randomNum1 = Math.floor(Math.random() * 20) + 1
        randomNum2 = Math.floor(Math.random() * 10) + 1
        if((randomNum1 + randomNum2) <= 15) {
            if(player3.length == 0) {
                player3.push(1)
            } else {
                player3.push(player3.at(-1) + 1)
            }
        } else {
            if(player3.length == 0) {
                player3.push(0)
            } else {
                player3.push(player3.at(-1))
            }
        }
        console.clear()
        console.log(`
▀▀█▀▀ █▀▀█ █▀▄▀█ █▀▀ █▀▀█ █ █▀▀ 　 ░█▀▀▄ ─▀─ █▀▀ █▀▀ 　 ░█▀▀█ █▀▀█ █▀▄▀█ █▀▀ 
─░█── █──█ █─▀─█ █▀▀ █▄▄▀ ─ ▀▀█ 　 ░█─░█ ▀█▀ █── █▀▀ 　 ░█─▄▄ █▄▄█ █─▀─█ █▀▀ 
─░█── ▀▀▀▀ ▀───▀ ▀▀▀ ▀─▀▀ ─ ▀▀▀ 　 ░█▄▄▀ ▀▀▀ ▀▀▀ ▀▀▀ 　 ░█▄▄█ ▀──▀ ▀───▀ ▀▀▀
        `)
        console.log("Round: "+x)
        console.log("Player 1:")
        console.log(player1)
        console.log("Player 2:")
        console.log(player2)
        console.log("Player 3:")
        console.log(player3)
        

        
        
    }
    if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player1.at(-1) && Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player2.at(-1) && Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player3.at(-1))  {
        player1_draws++
        player2_draws++
        player3_draws++      
    }
    else if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player1.at(-1) && Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player2.at(-1))  {
        player1_draws++
        player2_draws++
        player3_loss++      
    }
    else if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player1.at(-1) && Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player3.at(-1))  {
        player1_draws++
        player2_loss++
        player3_draws++      
    }
    else if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player2.at(-1) && Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player3.at(-1))  {
        player1_loss++
        player2_draws++
        player3_draws++      
    }
    else if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player1.at(-1))  {
        player1_wins++
        player2_loss++
        player3_loss++      
    }
    else if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player2.at(-1))  {
        player1_loss++
        player2_wins++
        player3_loss++      
    }
    else if(Math.max(player1.at(-1), player2.at(-1), player3.at(-1)) == player3.at(-1))  {
        player1_loss++
        player2_loss++
        player3_wins++      
    }
    outputString = outputString + "\nPlayer 1: "+ player1.at(-1)
    outputString = outputString + "\nPlayer 2: "+ player2.at(-1)
    outputString = outputString + "\nPlayer 3: "+ player3.at(-1)
    player1 = []
    player2 = []
    player3 = []

    
    
}
console.clear()
console.log(`
▀▀█▀▀ █▀▀█ █▀▄▀█ █▀▀ █▀▀█ █ █▀▀ 　 ░█▀▀▄ ─▀─ █▀▀ █▀▀ 　 ░█▀▀█ █▀▀█ █▀▄▀█ █▀▀ 
─░█── █──█ █─▀─█ █▀▀ █▄▄▀ ─ ▀▀█ 　 ░█─░█ ▀█▀ █── █▀▀ 　 ░█─▄▄ █▄▄█ █─▀─█ █▀▀ 
─░█── ▀▀▀▀ ▀───▀ ▀▀▀ ▀─▀▀ ─ ▀▀▀ 　 ░█▄▄▀ ▀▀▀ ▀▀▀ ▀▀▀ 　 ░█▄▄█ ▀──▀ ▀───▀ ▀▀▀
`)
console.log("All done!")

//console.log(outputString)
fs.writeFileSync("results.txt", outputString);
console.log("\n\nWins:")
console.log("Player 1: "+ player1_wins)
console.log("Player 2: "+ player2_wins)
console.log("Player 3: "+ player3_wins)
console.log("\n\nDraws:")
console.log("Player 1: "+ player1_draws)
console.log("Player 2: "+ player2_draws)
console.log("Player 3: "+ player3_draws)
console.log("\n\nLoss:")
console.log("Player 1: "+ player1_loss)
console.log("Player 2: "+ player2_loss)
console.log("Player 3: "+ player3_loss)
console.log("Full results have been appended to results.txt :)")