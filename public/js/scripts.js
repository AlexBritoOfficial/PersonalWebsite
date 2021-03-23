"use strict";

var matchMedia375px = window.matchMedia("(max-width: 375px)");

function getScreenSize() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  fixWindowBasedOnMediaQuery(width);
}

function fixWindowBasedOnMediaQuery(x) {
  if (x === 375) {
    iPhoneX375WidthViewPortMediaQueryBreakPoint();
  }
}

function iPhoneX375WidthViewPortMediaQueryBreakPoint() {
  console.log("You hit the 375px width!!!");
  let classContainers = document.querySelectorAll(".container-fluid");
  let consoleContainer = classContainers[2].children;

  let pElementsInnerConsoleArray = consoleContainer[0].children[0].children[0].children[0].children[0].querySelectorAll(
    ".consoleText"
  );

  console.log(pElementsInnerConsoleArray);

  for (let x of pElementsInnerConsoleArray) {
    console.log(x.innerText);
    if (x.innerText === `=> "Wentworth Institute of Technology"`) {
      x.innerHTML = `=> "Wentworth Institute <br> of Technology"`;
      x.style.whiteSpace = "nowrap";
    }
  }
}

getScreenSize();
window.addEventListener("resize", getScreenSize);
