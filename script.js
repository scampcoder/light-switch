let lightbulb = document.getElementById('lightbulb');

function bulbSwitch() {
  if (lightbulb.src.match("img/lighton.jpg")) {
    lightbulb.src = "img/lightoff.jpg";
  } else {
    lightbulb.src = "img/lighton.jpg";
  }
}

lightbulb.onclick = bulbSwitch();
