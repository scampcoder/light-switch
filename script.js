function bulbSwitch() {
  const lightbulb = document.getElementById('lightbulb');
  if(lightbulb.src = "img/lighton.jpg") {
    lightbulb.src = "img/lightoff.jpg";
  } else {
    lightbulb.src = "img/lighton.jpg";
  }
}

lightbulb.onclick = bulbSwitch();
