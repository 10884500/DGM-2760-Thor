document.querySelector("header > h1").innerText = "Inspector Clouseau";
document.querySelector("header > h2").innerText = "This iz chief inspector Clouseau speaking on ze pheaun";

function reDisplay() {
  let windowSizes = `Window size is ${window.innerWidth}px by ${window.innerHeight}px.`;
  let offset = `Window is offset by ${window.screenX} from the left, and ${window.screenY} from the top of the display.`;

  let myWin = (document.querySelector("#myWin").innerText = `${windowSizes} \n ${offset}`);
}
reDisplay()