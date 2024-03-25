/* 1번 과제 */

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location.reload(true);
});

/*2번 과제*/

const headerIcon = document.querySelector(".icon-list");
const menuIcon = document.querySelector(".menu");
const button = document.querySelector(".button-container");

const totalIcon = [headerIcon, menuIcon, button];

totalIcon.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.opacity = "0.5";
  });
  element.addEventListener("mouseout", () => {
    element.style.opacity = "1";
  });
});

/*3번 과제*/

const modal = document.querySelector(".alart");
const likebutton = document.querySelector("#black-heart");
const dislike = document.querySelector("#red-heart");
const likeMessage = document.querySelector(".alarm");

likebutton.addEventListener("click", () => {
  modal.style.opacity = "1";
  modal.style.right = "415px";
  likeMessage.innerHTML = "좋아요를 <br /> 눌렀어요";
});

dislike.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.right = "275px";
  likeMessage.innerHTML = "이젠 <br/> 아니에요";
});

/*4번 과제*/
//instagram.js의 코드를 수정

/*5번 과제*/

const emoji = document.querySelector(".smile");
let emojiContainer = document.querySelector(".emoji-container");

emoji.addEventListener("click", () => {
  if (emojiContainer.style.display === "none") {
    emojiContainer.style.display = "flex";
  } else emojiContainer.style.display = "none";
});

let emojiImage = document.querySelectorAll("li");

emojiImage.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.opacity = "0.5";
    element.style.backgroundColor = "gray";
  });

  element.addEventListener("mouseout", () => {
    element.style.opacity = "1";
    element.style.backgroundColor = "transparent";
  });

  element.addEventListener("click", () => {
    let emoji;
    switch (element.getAttribute("id")) {
      case "smile-cry":
        emoji = "🤣";
        break;
      case "oh":
        emoji = "😯";
        break;
      case "heart-eye":
        emoji = "😍";
        break;
      case "cry":
        emoji = "🥲";
        break;
      case "clap":
        emoji = "🙌";
        break;
      case "carrot":
        emoji = "🥕";
        break;
      case "celebration":
        emoji = "🎉";
        break;
      case "hundred":
        emoji = "💯";
        break;
      case "heart":
        emoji = "❤️";
        break;
      case "heart-face":
        emoji = "🥰";
        break;
      case "kiss":
        emoji = "😘";
        break;
      case "melt":
        emoji = "🫠";
        break;
      case "sunglass":
        emoji = "😎";
        break;
      case "start":
        emoji = "⭐";
        break;
    }
    commentInput.value = commentInput.value + emoji;
  });
});
