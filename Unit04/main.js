function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMonthName(month) {
  let name;
  switch (month) {
    case 1:
      name = "January"
      break;
    case 2:
      name = "February"
      break;
    case 3:
      name = "March"
      break;
    case 4:
      name = "April"
      break;
    case 5:
      name = "May"
      break;
    case 6:
      name = "June"
      break;
    case 7:
      name = "July"
      break
    case 8:
      name = "August"
      break;
    case 9:
      name = "September"
      break;
    case 10:
      name = "October"
      break;
    case 11:
      name = "November"
      break;
    case 12:
      name = "December"
      break;

    default:
      name = "Not a month"
      break;
  }
  return name;
}

function getFortune(fate) {
  let message;
  switch (fate) {
    case 1:
      message = "let Pokemon become real"
      break;
    case 2:
      message = "always get a ghost wipe"
      break;
    case 3:
      message = "never trip"
      break;
    case 4:
      message = "have your socks fit perfectly"
      break;
    case 5:
      message = "have a shower that is the perfect tempature"
      break;
    case 6:
      message = "befriend a cat"
      break;
    case 7:
      message = "befreind a dog"
      break;

    default:
      message = "Not a month"
      break;
  }
  return message;
}

let fate = getRandomIntInclusive(1, 7);
let day = getRandomIntInclusive(1, 30);
let month = getRandomIntInclusive(1, 12);
const MonthName = getMonthName(month);
const fortune = getFortune(fate);

const fortuneRevealed = `On ${MonthName} ${day}, you will ${fortune}`;

document.querySelector("#fortune").innerText = fortuneRevealed;
