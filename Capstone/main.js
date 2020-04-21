async function getFighterData() {
  try {
    const response = await fetch("characters.json");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

let fighterdata = {};

getFighterData().then((data) => (fighterData = data));

document.querySelector("#falco").addEventListener("click", fighterInfo);

document.querySelector("#link").addEventListener("click", fighterInfo);

document.querySelector("#greninja").addEventListener("click", fighterInfo);

function fighterInfo(event) {
  let fighterChoice = fighterData.fighter.find((fighter) => {
    return event.target.id === fighter.name.toLowerCase();
  });
  console.log(fighterChoice);

  document.querySelector("#fighterName").textContent = `${fighterChoice.name}`;
  document.querySelector(
    "#apperances"
  ).textContent = `${fighterChoice.apperances}`;
  document.querySelector("#maps").textContent = `${fighterChoice.maps}`;
  document.querySelector(
    "#rangedSpecial"
  ).textContent = `${fighterChoice.rangedSpecial}`;
  document.querySelector("#type").textContent = `${fighterChoice.type}`;
  let picturePlacement = document.querySelector("#picture");
  picturePlacement.src = `${fighterChoice.picture}`;
  let picturePlacement2 = document.querySelector(".thumbnail");
  picturePlacement2.src = `${fighterChoice.picture}`;
  document.querySelector(".fighterName").textContent = `${fighterChoice.name}`;
}

const thumbnail = document.querySelector(".thumbnail");
const pp = document.querySelector("#picture");
const audio = document.querySelector("#audio");

var playing = true;
var audioSrc = [
    "/Capstone/assets/falco.mp4",
    "/Capstone/assets/link.mp4",
    "/Capstone/assets/greninja.mp4",
  ],
  audioIndex = 0;

function playPause() {
  if (playing) {
    const audio = document.querySelector("#audio"),
      thumbnail = document.querySelector(".thumbnail");

    audio.play();
    playing = false;
    thumbnail.style.transform = "scale(1.2)";
  } else {
    const audio = document.querySelector("#audio");
    audio.pause();
    playing = true;
    thumbnail.style.transform = "scale(1)";
  }
}

function linkAudio() {
  document.querySelector("#audio").src = audioSrc[1];

    audio.pause()
    thumbnail.style.transform = "scale(1)";
}

function falcoAudio() {
  document.querySelector("#audio").src = audioSrc[0];

  audio.pause()
  thumbnail.style.transform = "scale(1)";
}

function grenAudio() {
  document.querySelector("#audio").src = audioSrc[2];

  audio.pause()
  thumbnail.style.transform = "scale(1)";
}
