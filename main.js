
skillWidth();
megaMenu();
// topScroll();
eventTime();


function megaMenu() {
  let myElement = document.querySelector(".clk");
  let myLink = document.querySelector(".clk a");
  let target = document.querySelector(".mega-menu");
  let counter = 0;
  myElement.onclick = function () {
  counter++;
  if (counter % 2 != 0) {
    target.style.cssText = "opacity: 1; z-index: 100; top: calc(100% + 2px);";
    myLink.style.color = "var(--main-color)";
  } else {
    target.style.cssText = "opacity: 0; z-index: -1; top: calc(100% + 2px);";
    myLink.style.color = "initial";
  }
  };
}

function topScroll() {
  let element = document.createElement("span");
  element.appendChild(document.createTextNode("Up"));
  document.body.appendChild(element)
  element.className = "top-button";
  console.log(element);
  let section = document.querySelector("#gallery");
  window.onscroll = function () {
  if (this.scrollY >= section.offsetTop) {
    element.style.right = "20px";
    element.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  } else element.style.right = "-50px";
};
}

function skillWidth() {
  let skillSpan = Array.from(document.querySelectorAll(".our-skills .the-progress span"));
  let skillSection = document.querySelector(".our-skills");
  let start = false;
  skillSpan.forEach((el) => {
    el.style.width = "0";
  });
  window.onscroll = function () {
    if (window.scrollY >= skillSection.offsetTop - 100) {
      skillSpan.forEach((el) => {
        if (!start) {
          el.style.width = `${el.dataset.width}`;
        }
      });
      start = true;
    }
};
}

function eventTime() {

  let eventDate = new Date("Dec 31, 2022 23:59:59").getTime();

  let count = setInterval(() => {
    let currentDate = new Date().getTime();
    let diffDate = eventDate - currentDate;
    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffDate % (1000 * 60 * 60 ) / (1000 * 60));
    let seconds = Math.floor(diffDate % (1000 * 60) / 1000);

    document.querySelector(".events .info .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .info .hours").innerHTML = hours< 10 ? `0${hours}` : hours;
    document.querySelector(".events .info .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .info .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(diffDate < 0) {
      clearInterval(count);
    }
  }, 1000);


}