const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowUp") {
    position = position - 50;
  }
  if (e.code === "ArrowDown") {
    position = position + 50;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.top = position + "px";
}
