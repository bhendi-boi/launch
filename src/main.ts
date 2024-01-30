import "./style.css";
import ConfettiGenerator from "confetti-js";
const launchButton = document.querySelector(".launch-button");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

launchButton?.addEventListener("click", function () {
  left?.setAttribute("data-transition", "true");
  right?.setAttribute("data-transition", "true");
  sleep(500).then(() => {
    confetti.render();
  });
  sleep(1000).then(() => {
    window.location.replace("https://alumniportal.vercel.app");
  });
});

const confettiSettings = { target: "canvas", max: 200, clock: 40 };
const confetti = new ConfettiGenerator(confettiSettings);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
