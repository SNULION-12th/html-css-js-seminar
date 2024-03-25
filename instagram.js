/*console.log("연결완료");

// 클래스가 'story-element'인 요소들을 모두 취득
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    alert("스토리 클릭");
  });
});

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyElement.style.color = "orange";
  });
});
*/

// 첫번째 실습

// TODO1. "story-modal" 클래스 요소 취득하기
// document 에서 "story-modal" 이라는 클래스를 가진 요소를 하나 취득하여
// storyModal 변수에 저장하세요.
// getElementById? querySelector? querySelectorAll? 무엇을 사용할지 고민해보세요.

const storyModal = document.querySelector(".story-modal"); // PUT YOUR CODE HERE...
const storyElements = document.querySelectorAll(".story-element");

const storyImage = document.getElementById("story-image");

// TODO2. "story-element" 클래스 div가 클릭될 시 "story-modal" 클래스 요소 보여주기

// storyElements를 forEach로 순회하며
// 각 storyElement DOM 에 eventListener를 추가하세요.
// eventType은 'click' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : 앞서 정의한 storyModal 의 style.display 속성을 "block"으로 바꿈.

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

// TODO3.
// 앞서 정의한 storyModal 에 eventListener를 추가하세요.
// eventType은 'click' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : 앞서 정의한 storyModal의 style.display 속성을 "none"으로 바꿈.
storyModal.addEventListener(
  // PUT YOUR CODE HERE
  "click",
  (e) => {
    if (e.target === storyImage) {
      return;
    } else {
      storyModal.style.display = "none";
    }
  }
);

storyImage.addEventListener("click", () => {
  storyModal.style.display = "block";
});
// 두번째 실습
// TODO1. "profile-container" 클래스 요소 취득하기
const profile_container = document.querySelector(".profile-container"); // PUT YOUR CODE HERE...

// TODO2. "profile-modal" id를 가진 요소 취득하기
const profile_modal = document.querySelector("#profile-modal"); // PUT YOUR CODE HERE...

// TODO3. profile_container에 eventListener를 추가하세요.
// eventType은 'mouseover' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능1 : profile_modal 의 style.display 속성을 "block"으로 바꿈.
// eventHandler 기능2 : profile_modal 의 style.position 속성을 "absolute"으로 바꿈.
profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

// TODO4. profile_container에 또 다른 eventListener를 추가하세요.
// eventType은 'mouseout' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : profile_modal 의 style.display 속성을 "none"으로 바꿈.
profile_container.addEventListener(
  // PUT YOUR CODE HERE...
  "mouseout",
  () => {
    profile_modal.style.display = "none";
  }
);

// 실습 3
const likeCount = document.getElementById("like-count");
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

const storyContainer = document.querySelector(".story-container");
const notification = document.querySelector(".notification-modal");

// TODO1. 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  // 빨간 하트를 보여주고 검정 하트는 숨기기
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = likeCount.innerText; // PUT YOUR CODE HERE...

  // 좋아요 갯수를 하나 늘려서 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = parseInt(count) + 1; // PUT YOUR CODE HERE...
  console.log(typeof likeCount.innerText); //어차피 innerText는 string으로 자동형변환 되는듯

  notification.style.display = "block";

  setTimeout(() => {
    notification.style.opacity = "0";
  }, 2500);

  setTimeout(() => {
    notification.style.display = "none";
    notification.style.opacity = "90%";
  }, 3000);
});

// TODO2. 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  // 검정 하트는 보여주고 빨간 하트는 숨기기
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = likeCount.innerText; // PUT YOUR CODE HERE...

  // 좋아요 갯수를 하나 감소시켜 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = parseInt(count) - 1; // PUT YOUR CODE HERE...
  console.log(typeof likeCount.innerText);
});

// 실습4: 뎃글 만들기

const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

const emojiModal = document.querySelector(".emoji-modal");

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

  if (emojiModal.style.display === "block") {
    emojiModal.style.display = "none";
  }
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
  // id가 변하는 건 사실 좋은 코딩이 아님.
};

// 날짜 바꾸기
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

// 과제 1
// header에 있는 'instagram'을 누르면 사이트가 새로고침 되도록 해주세요!

// TODO1 요소 취득
const logo = document.querySelector(".logo");

// TODO2. 로고를 눌렀을 떄

logo.addEventListener("click", () => {
  // 페이지를 새로고침하게 만들기
  location.reload();

  // 클릭 시 'clicked' 클래스를 추가하여 클릭 효과를 부여합니다.
  logo.classList.add("clicked");

  // 0.2초 후에 'clicked' 클래스를 제거하여 원래 상태로 되돌립니다.
  setTimeout(() => {
    logo.classList.remove("clicked");
  }, 1000);
});

// 과제 2
// html에 있는 아이콘(header, article)들에 hover하면 불투명도가 생기게 해주세요!

// JavaScript를 사용하여 아이콘 요소를 가져옵니다.
const iconList = document.querySelector(".icon-list");
const article = document.querySelector(".article");

// 각 아이콘에 마우스가 올라갔을 때 불투명도를 적용합니다.
iconList.addEventListener("mouseover", () => {
  iconList.style.opacity = "0.7";
});

article.addEventListener("mouseover", () => {
  article.style.opacity = "0.7";
});

// 마우스가 벗어났을 때 다시 원래의 불투명도로 돌아갑니다.
iconList.addEventListener("mouseleave", () => {
  iconList.style.opacity = "1";
});

article.addEventListener("mouseleave", () => {
  article.style.opacity = "1";
});

// 이모지 넣기

const smile = document.querySelector(".smile");

smile.addEventListener("click", () => {
  if (emojiModal.style.display === "none") {
    emojiModal.style.display = "block";
  } else {
    emojiModal.style.display = "none";
  }
});

const emojiElements = document.querySelectorAll(".emoji");

emojiElements.forEach((emojiElement) => {
  emojiElement.addEventListener("click", () => {
    commentInput.value += emojiElement.innerText;
  });
});
