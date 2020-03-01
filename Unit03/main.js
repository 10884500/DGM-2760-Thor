// Pick any # between 0 & 16

let rightNum = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
rightNum += 1

console.log(rightNum)

function evalGuess() {
    totalGuesses++ // Total guesses +1
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')
    
    if (gamerGuess == rightNum) {
        feedback.innerText = 'Correct!'
        giveAward()
    } else if (gamerGuess > rightNum && gamerGuess < 16) {
        feedback.innerText = 'Too high, try again'
    } else if (gamerGuess < rightNum && gamerGuess > 0) {
        feedback.innerText = 'Too low try again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15, then try again'
        totalGuesses--
    }
    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    console.log('Congrabumilations')

    let imgPath = '#'

    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imgPath = 'assets/gold.png'
            break;
        case 4:
        case 5:
        case 6:
            imgPath = 'assets/red.png'
            break;
        case 7:
        case 8:
        case 9:
            imgPath = 'assets/green.png'
            break;
        case 10:
        case 11:
        case 12:
            imgPath = 'assets/pink.png'
            break;
        case 13:
        case 14:
        case 15:
            imgPath = 'assets/why.png'
    }

    const awardRib = document.createElement('img') // Creates a img element
    awardRib.setAttribute('src', imgPath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardRib)
}