const header_logo = document.querySelector(".logo");

header_logo.addEventListener("click", () => {
  location.reload(true);
});

const header_icons = document.querySelector(".header");
const article_icons = document.querySelector(".article");

header_icons.addEventListener("mouseover", () => {
  header_icons.style.opacity = "50%";
});

header_icons.addEventListener("mouseout", () => {
  header_icons.style.opacity = "100%";
});

article_icons.addEventListener("mouseover", () => {
  article_icons.style.opacity = "50%";
});

article_icons.addEventListener("mouseout", () => {
  article_icons.style.opacity = "100%";
});

const heart_button = document.querySelector("#black-heart");
const button_modal = document.querySelector(".button-modal");

let keyframes = [
  { opacity: 0, backgroundColor: "silver" },
  { opacity: 1, backgroundColor: "silver" },
];
let options = {
  direction: "reverse",
  duration: 2500,
  iterations: 1,
  fill: "forwards",
};

heart_button.addEventListener("click", () => {
  button_modal.style.display = "block";
  button_modal.animate(keyframes, options);
});

const story_modal = document.querySelector(".story-modal");
const story_elements = document.querySelectorAll(".story-element");

storyModal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget.querySelector("#story-image")) {
    storyModal.style.display = "block";
  } else {
    storyModal.style.display = "none";
  }
});
