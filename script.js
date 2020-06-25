let lightbulb = document.getElementById('lightbulb');

function bulbSwitch() {
  if (lightbulb.src.match("lighton.jpeg")) {
    lightbulb.src = "lightoff.jpeg";
  } else {
    lightbulb.src = "lighton.jpeg";
  }
}
