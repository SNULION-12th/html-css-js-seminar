const logoinsta = document.querySelector(".logo");

logoinsta.addEventListener("click", () => {
  window.location.reload();
});

const alarm = document.getElementById("black-heart");
const noti = document.querySelector(".notification");

alarm.addEventListener("click", () => {
  noti.style.display = "block";
  setTimeout(() => {
    noti.style.display = "none";
  }, 2000);
});

const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");
const storyimage = document.getElementById("story-image");

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", (event) => {
  if (event.target === storyModal) {
    storyModal.style.display = "none";
  }
});

storyimage.addEventListener("click", (event) => {
  event.stopPropagation();
});

const smile = document.querySelector(".smile");
const emoticon = document.querySelector(".emoticon-box");

smile.addEventListener("click", () => {
  emoticon.style.display = "block";
});

emoticonimages = document.querySelectorAll(".emoticon-image");

emoticonimages.forEach((emoticonelement) => {
  emoticonelement.addEventListener("click", () => {
    let targetemoticon = emoticonelement.innerText;
    console.log(targetemoticon);
    comment = document.querySelector(".comment");
    comment.value += targetemoticon;
  });
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
  emoticon.style.display = "none";
});
