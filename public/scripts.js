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
  if (x === 414) {
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
    x.style.whiteSpace = "nowrap";
    if (x.innerText === `=> "Boston,Massachusetts"`) {
      x.innerHTML = `=>"Boston, <br> Massachusetts"`;
    }

    if (x.innerText === `=> "Wentworth Institute of Technology"`) {
      x.innerHTML = `=> "Wentworth Institute <br> of Technology"`;
    }

    if (x.innerText === `> alexBrito.expectedGraduation`) {
      x.innerHTML = `> alexBrito.<br>expectedGraduation`;
    }
  }
  pElementsInnerConsoleArray[7].innerHTML = `=> ["Running",<br> "Lifting",<br> "Coding",<br> "Music",<br> "Reading",<br>"Skateboarding",<br> "Sunsets"]`;
}

getScreenSize();
window.addEventListener("resize", getScreenSize);
