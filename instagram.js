// 실습1
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", (event) => {
  if (event.target.className == "forjs") {
    console.log("nice!");
  } else {
    storyModal.style.display = "none";
  }
  console.log(event.target.className);
});

// 실습 2
const profile_container = document.querySelector(".profile-container");
const profile_modal = document.getElementById("profile-modal");

profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

// 실습 3
const likeCount = document.getElementById("like-count");
likeCountNum = likeCount.innerText;
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

const notif = document.querySelector(".notification");
// 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) + 1;

  notif.style.left = "75%";
});

// 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) - 1;

  //팝업기능
});

// 실습 4
const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

// 댓글을 만드는 로직
const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  commentId = commentsList.length;
  const commentNode = `
    <div class="comment-wrapper">
      <span class="comment">${commentText}</span>
      <img
        id="${commentId}" 
        class="comment-delete-icon" 
        onclick="deleteComment(${commentId})" 
        src="./images/close.png" 
        alt="comment" 
      />
    </div>
  `;
  commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
  commentInput.value = "";
});

// 실습 5

const deleteComment = (id) => {
  // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다.
  commentsList.splice(id, 1);

  // TODO2. 새로운 commentsList에 map 함수를 호출하여
  // 댓글 HTML 요소들로 이루어진 배열을 만듭니다.
  // join 함수를 이용해 배열 원소들을 하나의 스트링으로 만들어
  // commentContainer의 innerHTML에 저장합니다.

  commentContainer.innerHTML = commentsList
    .map(
      (comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`
    )
    .join("");
};

// 실습6
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

const restart = document.querySelector(".logo");
const hovs = document.querySelectorAll(".icon");

restart.addEventListener("click", () => {
  location.reload();
});

hovs.forEach((hov) => {
  hov.addEventListener("mouseover", () => {
    hov.style.opacity = "0.5";
  });
});

hovs.forEach((hov) => {
  hov.addEventListener("mouseout", () => {
    hov.style.opacity = "1";
  });
});

const imoticonElement = document.querySelector(".imoticon");
const smileElement = document.querySelector(".smile");

console.log(imoticonElement);
console.log(smileElement);

smileElement.addEventListener("click", () => {
  console.log(imoticonElement.style.display);
});

// const imoticons = document.querySelectorAll(".imt");
// const textElement = document.querySelector(".comment");

// var inputValue = "";
// console.log(textElement);
// textElement.addEventListener("input", (ev) => {
//   var inputValue = ev.target.value;
//   console.log(inputValue);
// });

// imoticons.forEach((imoticon) => {
//   imoticon.addEventListener("click", () => {
//     if (imoticon.className == "a imt") {
//       textElement.value = inputValue + String.fromCharCode("&#128515");
//     } else if (imoticon.className == "b imt") {
//       console.log("성공");
//     }
//   });
// });
