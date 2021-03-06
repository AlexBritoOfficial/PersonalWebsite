"use strict";

var matchMedia375px = window.matchMedia("(max-width: 375px)");

function getScreenSize() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  console.log(width);
  fixWindowBasedOnMediaQuery(width);
}

function fixWindowBasedOnMediaQuery(x) {
  if (x === 360) {
    device360PXMediaQueryBreakPoint();
  }

  if (x === 375) {
    iPhoneX375WidthViewPortMediaQueryBreakPoint();
  }

  if (x === 411) {
    device411ViewPortMediaQueryBreakPoint();
  }

  if (x === 414) {
    iPhoneX414WidthViewPortMediaQueryBreakPoint();
  }
}

//

function device360PXMediaQueryBreakPoint() {
  console.log("You hit the 360px width!!!");
  let classContainers = document.querySelectorAll(".container-fluid");
  let consoleContainer = classContainers[2].children;

  let pElementsInnerConsoleArray = consoleContainer[0].children[0].children[0].children[0].children[0].querySelectorAll(
    ".consoleText"
  );

  for (let x of pElementsInnerConsoleArray) {
    console.log(x.innerText);
    x.style.fontSize = "16px";
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
  pElementsInnerConsoleArray[7].innerHTML = `=> ["Running",<br> "Lifting",<br> "Coding",<br> "Music",<br> "Reading",<br>"Skateboarding",<br> "Sunsets",<br> "Algorithms"]`;

  // Work Experience ASICS Media Query Styling

  let classContainerASICSWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[5].children[0].children[1].children[0].children[0].children;

  for (let x of classContainerASICSWorkExperiencePElements) {
    if (x.innerText === "• Developed and Executed Unit Test Plans") {
      x.innerHTML = `• Developed and Executed Unit Test <span class="pl-3"> Plans </span>`;
    }

    if (
      x.innerText ===
      "• Put in place several protocols for assigned portions of code using Junit and Mockito"
    ) {
      x.innerHTML = `• Put in place several protocols for <span class="pl-3"> assigned portions of code</span><span class="pl-3">using <span class="pl-3">Junit and Mockito</span>`;
    }

    if (
      x.innerHTML ===
      `• Identified, logged, and debugged assigned issues with Jira`
    ) {
      // Logic
      x.innerHTML = `• Identified, logged, and debugged <span class="pl-3"> assigned issues with Jira </span>`;
    }

    if (
      x.innerHTML ===
      `• Collaborated confidently with managers and developers alike`
    ) {
      // Logic
      x.innerHTML = `• Collaborated confidently with <span class="pl-3"> managers and developers alike </span>`;
    }

    if (
      x.innerHTML ===
      `• Participated in software development, quality engineering, and product management teams to design and
              implement features and <span class="pl-3">capabilities into the ASICS “Runkeeper” Android
                App</span>`
    ) {
      x.innerHTML = `• Participated in software development <span class="pl-3"> quality engineering, and product </span> 
     <span class="pl-3"> management teams to design and </span>
         <span class="pl-3">implement features and capabilities </span> <span class="pl-3"> into the ASICS “Runkeeper” Android</span>
                <span class="pl-3">App</span>`;
    }
  }

  // Work Experience State Street Corporation Media Query Styling
  let classContainerStateStreetWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[6].children[0].children[1].children[0].children;
  console.log(classContainerStateStreetWorkExperiencePElements);

  classContainerStateStreetWorkExperiencePElements[2].innerHTML = `• Obeyed all applicable federal laws, <span class="pl-3"> rules, and regulations to Anti-Money </span> <span class="pl-3"> Laundering</span>`;
}

function iPhone5ViewPortMediaQueryBreakPoint() {}

function iPhoneX375WidthViewPortMediaQueryBreakPoint() {
  console.log("You hit the 375px width!!!");
  let classContainerFluid = document.querySelectorAll(".container-fluid");
  let consoleContainer = classContainerFluid[2].children;

  // Console Media Query Styling
  let pElementsInnerConsoleArray = consoleContainer[0].children[0].children[0].children[0].children[0].querySelectorAll(
    ".consoleText"
  );

  for (let x of pElementsInnerConsoleArray) {
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
  pElementsInnerConsoleArray[7].innerHTML = `=> ["Running",<br> "Lifting",<br> "Coding",<br> "Music",<br> "Reading",<br>"Skateboarding",<br> "Sunsets",<br> "Algorithms"]`;

  // Work Experience Media Query Styling

  let classContainerASICSWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[5].children[0].children[1].children[0].children[0].children;

  for (let x of classContainerASICSWorkExperiencePElements) {
    if (x.innerText === "• Developed and Executed Unit Test Plans") {
      x.innerHTML = `• Developed and Executed Unit Test <span class="pl-3"> Plans </span>`;
    }

    if (
      x.innerText ===
      "• Put in place several protocols for assigned portions of code using Junit and Mockito"
    ) {
      x.innerHTML = `• Put in place several protocols for <span class="pl-3"> assigned portions of code using Junit </span> <span class="pl-3"> and Mockito </span>`;
    }

    if (
      x.innerHTML ===
      `• Identified, logged, and debugged assigned issues with Jira`
    ) {
      // Logic
      x.innerHTML = `• Identified, logged, and debugged <span class="pl-3"> assigned issues with Jira </span>`;
    }

    if (
      x.innerHTML ===
      `• Collaborated confidently with managers and developers alike`
    ) {
      // Logic
      x.innerHTML = `• Collaborated confidently with <span class="pl-3"> managers and developers alike </span>`;
    }

    if (
      x.innerHTML ===
      `• Participated in software development, quality engineering, and product management teams to design and
              implement features and <span class="pl-3">capabilities into the ASICS “Runkeeper” Android
                App</span>`
    ) {
      x.innerHTML = `• Participated in software development, <span class="pl-3"> quality engineering, and product </span> 
     <span class="pl-3"> management teams to design and </span>
         <span class="pl-3">implement features and capabilities </span> <span class="pl-3"> into the ASICS “Runkeeper” Android</span>
                App</span>`;
    }
  }

  // Work Experience State Street Corporation Media Query Styling

  let classContainerStateStreetWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[6].children[0].children[1].children[0].children;
  console.log(classContainerStateStreetWorkExperiencePElements);

  classContainerStateStreetWorkExperiencePElements[2].innerHTML = `• Obeyed all applicable federal laws, <span class="pl-3"> rules, and regulations to Anti-Money </span> <span class="pl-3"> Laundering</span>`;
}

function device411ViewPortMediaQueryBreakPoint() {
  console.log("You hit the 411px width!!!");
  let classContainers = document.querySelectorAll(".container-fluid");
  let consoleContainer = classContainers[2].children;

  let pElementsInnerConsoleArray = consoleContainer[0].children[0].children[0].children[0].children[0].querySelectorAll(
    ".consoleText"
  );

  for (let x of pElementsInnerConsoleArray) {
    console.log(x.innerText);
    x.style.fontSize = "16px";
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
  pElementsInnerConsoleArray[7].innerHTML = `=> ["Running",<br> "Lifting",<br> "Coding",<br> "Music",<br> "Reading",<br>"Skateboarding",<br> "Sunsets",<br> "Algorithms"]`;

  // Work Experience ASICS Media Query Styling

  let classContainerASICSWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[5].children[0].children[1].children[0].children[0].children;

  for (let x of classContainerASICSWorkExperiencePElements) {
    if (x.innerText === "• Developed and Executed Unit Test Plans") {
      x.innerHTML = `• Developed and Executed Unit Test Plans`;
    }

    if (
      x.innerText ===
      "• Put in place several protocols for assigned portions of code using Junit and Mockito"
    ) {
      x.innerHTML = `• Put in place several protocols for <span class="pl-3">assigned portions of code using Junit and</span><span class="pl-3"> Mockito</span>`;
    }

    if (
      x.innerHTML ===
      `• Identified, logged, and debugged assigned issues with Jira`
    ) {
      // Logic
      x.innerHTML = `• Identified, logged, and debugged <span class="pl-3"> assigned issues with Jira </span>`;
    }

    if (
      x.innerHTML ===
      `• Collaborated confidently with managers and developers alike`
    ) {
      // Logic
      x.innerHTML = `• Collaborated confidently with managers and <span class="pl-3">developers alike</span>`;
    }

    if (
      x.innerHTML ===
      `• Participated in software development, quality engineering, and product management teams to design and
              implement features and <span class="pl-3">capabilities into the ASICS “Runkeeper” Android
                App</span>`
    ) {
      x.innerHTML = `• Participated in software development <span class="pl-3">quality engineering, and product</span> 
      <span class="pl-3">management teams to design and implement</span> <span class="pl-3">features and capabilities into the ASICS</span> <span class="pl-3">“Runkeeper” Android App</span>`;
    }
  }

  // Work Experience State Street Corporation Media Query Styling
  let classContainerStateStreetWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[6].children[0].children[1].children[0].children;
  console.log(classContainerStateStreetWorkExperiencePElements);

  classContainerStateStreetWorkExperiencePElements[2].innerHTML = `• Obeyed all applicable federal laws, <span class="pl-3"> rules, and regulations to Anti-Money </span> <span class="pl-3"> Laundering</span>`;
}

function iPhoneX414WidthViewPortMediaQueryBreakPoint() {
  console.log("You hit the 414px width!!!");
  let classContainers = document.querySelectorAll(".container-fluid");
  let consoleContainer = classContainers[2].children;

  let pElementsInnerConsoleArray = consoleContainer[0].children[0].children[0].children[0].children[0].querySelectorAll(
    ".consoleText"
  );

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
  pElementsInnerConsoleArray[7].innerHTML = `=> ["Running",<br> "Lifting",<br> "Coding",<br> "Music",<br> "Reading",<br>"Skateboarding",<br> "Sunsets",<br> "Algorithms"]`;

  // Work Experience ASICS Media Query Styling

  let classContainerASICSWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[5].children[0].children[1].children[0].children[0].children;

  for (let x of classContainerASICSWorkExperiencePElements) {
    if (x.innerText === "• Developed and Executed Unit Test Plans") {
      x.innerHTML = `• Developed and Executed Unit Test <span class="pl-3"> Plans </span>`;
    }

    if (
      x.innerText ===
      "• Put in place several protocols for assigned portions of code using Junit and Mockito"
    ) {
      x.innerHTML = `• Put in place several protocols for <span class="pl-3"> assigned portions of code using Junit </span> <span class="pl-3"> and Mockito </span>`;
    }

    if (
      x.innerHTML ===
      `• Identified, logged, and debugged assigned issues with Jira`
    ) {
      // Logic
      x.innerHTML = `• Identified, logged, and debugged <span class="pl-3"> assigned issues with Jira </span>`;
    }

    if (
      x.innerHTML ===
      `• Collaborated confidently with managers and developers alike`
    ) {
      // Logic
      x.innerHTML = `• Collaborated confidently with  managers and <span class="pl-3">developers alike</span>`;
    }

    if (
      x.innerHTML ===
      `• Participated in software development, quality engineering, and product management teams to design and
              implement features and <span class="pl-3">capabilities into the ASICS “Runkeeper” Android
                App</span>`
    ) {
      x.innerHTML = `• Participated in software development, <span class="pl-3"> quality engineering, and product </span> 
     <span class="pl-3"> management teams to design and </span>implement <span class="pl-3"> features and capabilities into the ASICS </span><span class="pl-3">“Runkeeper” Android
                App</span>`;
    }
  }

  // Work Experience State Street Corporation Media Query Styling
  let classContainerStateStreetWorkExperiencePElements = document.querySelectorAll(
    ".container"
  )[6].children[0].children[1].children[0].children;
  console.log(classContainerStateStreetWorkExperiencePElements);

  classContainerStateStreetWorkExperiencePElements[2].innerHTML = `• Obeyed all applicable federal laws, <span class="pl-3"> rules, and regulations to Anti-Money </span> <span class="pl-3"> Laundering</span>`;
}

getScreenSize();
window.addEventListener("resize", getScreenSize);
