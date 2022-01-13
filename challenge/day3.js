// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const mainText = document.querySelector("h2");
const superEventHandler = {
  mouseEnter: function () {
    mainText.innerText = "The mouse is here";
    mainText.style.color = colors[0];
  },
  mouseLeave: function () {
    mainText.innerText = "The mouse is gone!";
    mainText.style.color = colors[1];
  },
  resizeView: function () {
    mainText.innerText = "You changed the size!";
    mainText.style.color = colors[2];
  },
  rightClicked: function () {
    mainText.innerText = "You right clicked!";
    mainText.style.color = colors[3];
  }
};

mainText.addEventListener("mouseenter", superEventHandler.mouseEnter);
mainText.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resizeView);
window.addEventListener("contextmenu", superEventHandler.rightClicked);