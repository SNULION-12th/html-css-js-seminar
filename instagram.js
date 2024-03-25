// 실습 1

const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

document.addEventListener("click", function (event) {
  if (event.target === storyModal) {
    storyModal.style.display = "none";
  }
});

// 이벤트 버블링을 찾아보면 된다

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
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

// TODO1. 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  // 빨간 하트를 보여주고 검정 하트는 숨기기
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = parseInt(likeCount.innerText); // PUT YOUR CODE HERE...

  // 좋아요 갯수를 하나 늘려서 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = count + 1; // PUT YOUR CODE HERE...
});

// TODO2. 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  // 검정 하트는 보여주고 빨간 하트는 숨기기
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = parseInt(likeCount.innerText); // PUT YOUR CODE HERE...

  // 좋아요 갯수를 하나 감소시켜 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = count - 1; // PUT YOUR CODE HERE...
});

const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

// 댓글의 내용을 저장할 자료구조
const commentsList = [];
let commentId = 0;

// form 태그 제출 시 이벤트 핸들링. event(e)를 인자로 받아 event 정보를 취득. 매우 중요
commentsCreateForm.addEventListener("submit", (e) => {
  // TODO1. form 태그가 클릭 되었을 때 페이지 이동을 막고 댓글 내용을 취득하기
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  // TODO2. 댓글 내용이 표시될 HTML노드를 만들어주기
  // 이렇게 string 형식으로 HTML요소를 만들어서 HTML파일에 삽입할 수 있어요!
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

  // TODO3. "written-comments-container"에 댓글 HTML노드를 추가해주기
  // 채팅창 값은 비워주기
  commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
  commentInput.value = "";
});

// 실습 5

const deleteComment = (id) => {
  // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다.
  // 우리가 각 comment의 id 를 commentsList 에서의 순서로 설정했기에 가능합니다.
  commentsList.splice(id, 1);

  // TODO2. 새로운 commentsList에 map 함수를 호출하여
  // 댓글 HTML 노드들로 이루어진 배열을 만듭니다.
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

const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

const logo = document.querySelector(".logo");
const logoIcons = document.querySelectorAll(".icon-list");
const profileImage = document.querySelectorAll(".profile");
const moreBtn = document.querySelector(".menu");
const storyModalElements = document.querySelectorAll(".story-element");
const alertContainer = document.querySelector(".alert-container");

blackHeart.addEventListener("mouseover", () => {
  blackHeart.style.cursor = "pointer";
  blackHeart.style.opacity = "0.7";
});
blackHeart.addEventListener("mouseout", () => {
  blackHeart.style.opacity = "1";
  blackHeart.style.cursor = "default";
});
redHeart.addEventListener("mouseover", () => {
  redHeart.style.cursor = "pointer";
  redHeart.style.opacity = "0.7";
});
redHeart.addEventListener("mouseout", () => {
  redHeart.style.opacity = "1";
  redHeart.style.cursor = "default";
});
storyModalElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.cursor = "pointer";
    element.style.opacity = "0.7";
  });
});
storyModalElements.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.style.opacity = "1";
    element.style.cursor = "default";
  });
});
moreBtn.addEventListener("click", () => {
  moreBtn.style.cursor = "pointer";
  moreBtn.style.opacity = "0.5";
});
moreBtn.addEventListener("mouseout", () => {
  moreBtn.style.opacity = "1";
  moreBtn.style.cursor = "default";
});
logo.addEventListener("click", () => {
  location.reload(true);
});
profileImage.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.cursor = "pointer";
    image.style.opacity = "0.7";
  });
});
profileImage.forEach((image) => {
  image.addEventListener("mouseout", () => {
    image.style.opacity = "1";
    image.style.cursor = "default";
  });
});
logoIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.cursor = "pointer";
    icon.style.opacity = "0.7";
  });
});
logoIcons.forEach((icon) => {
  icon.addEventListener("mouseout", () => {
    icon.style.opacity = "1";
    icon.style.cursor = "default";
  });
});
logo.addEventListener("mouseover", () => {
  logo.style.cursor = "pointer";
  logo.style.opacity = "0.7";
});
logo.addEventListener("mouseout", () => {
  logo.style.opacity = "1";
  logo.style.cursor = "default";
});

blackHeart.addEventListener("click", () => {
  alertContainer.style.display = "flex";
  setTimeout(() => {
    alertContainer.style.right = "0";
  }, 100);
  setTimeout(function () {
    alertContainer.style.right = "-100%";
    setTimeout(function () {
      alertContainer.style.display = "none";
    }, 500);
  }, 3000);
});

const emojiElements = document.querySelectorAll(".emoji-element");
const emojiContainer = document.querySelector(".emoji-container");
const smileBtn = document.querySelector(".smile-btn");
smileBtn.addEventListener("click", () => {
  if (emojiContainer.style.display === "flex") {
    emojiContainer.style.display = "none";
  } else emojiContainer.style.display = "flex";
});

emojiElements.forEach((emojiElement) => {
  emojiElement.addEventListener("click", () => {
    commentInput.value = commentInput.value + emojiElement.innerText;
  });
});
emojiElements.forEach((emojiElement) => {
  emojiElement.addEventListener("mouseover", () => {
    emojiElement.style.cursor = "pointer";
    emojiElement.style["font-size"] = "24px";
  });
});

emojiElements.forEach((emojiElement) => {
  emojiElement.addEventListener("mouseout", () => {
    emojiElement.style.cursor = "default";
    emojiElement.style["font-size"] = "20px";
  });
});
