const logoElement = document.getElementsByClassName("logo")[0];
console.log(logoElement);

logoElement.addEventListener("click", () => {
  location.reload();
});

const alertElement = document.getElementsByClassName("alert-container")[0];
console.log(alertElement);

blackHeart.addEventListener("click", () => {
  // likeCount 요소의 내부 텍스트를 취득하세요
  animateElementToLeft();
});

// TODO2. 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  animateElementToRight();
});

function animateElementToLeft() {
  var element = alertElement;
  element.style.transform = "translateX(-40%)";
}

function animateElementToRight() {
  var element = alertElement;
  element.style.transform = "translateX(100%)";
}

const modalImage = document.getElementById("story-image");
console.log(modalImage);

storyModal.addEventListener("click", function (event) {
  // Check if the clicked element is the image itself
  if (event.target !== modalImage) {
    // If clicked outside the image, close the image
    storyModal.style.display = "none";
  }
});

const emoji = document.getElementsByClassName("smile")[0];
const emojiContainer = document.getElementById("emoji-container");

emoji.addEventListener("click", () => {
  emojiContainer.classList.toggle("inline");
  emojiContainer.classList.toggle("none");
});

const emojis = document.getElementsByClassName("emoji");
console.log(emojis);
console.log(commentInput);

const array = Array.prototype.slice.call(emojis, 0);

array.forEach((element) => {
  element.addEventListener("click", () => {
    insertCharacter(element.innerText);
  });
});

function insertCharacter(inEmoji) {
  var inputField = commentInput;

  inputField.value = inputField.value + inEmoji;
}
