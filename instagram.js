// 실습 1
const storyModal = document.querySelector('.story-modal');
const storyElements = document.querySelectorAll('.story-element');

storyElements.forEach( storyElement => {
   storyElement.addEventListener('click', () => {
    storyModal.style.display = "block";
   })
})

// TODO 4
storyModal.addEventListener('click', function(e) {
  if(e.target === this) {
    this.style.display = "none";
  }
})

// 실습 2
const profile_container = document.querySelector('.profile-container');
const profile_modal = document.querySelector('#profile-modal');

profile_container.addEventListener('mouseover', () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener('mouseout', () => {
  profile_modal.style.display = "none";
});

// 실습 3 , TODO3
const likeCount = document.getElementById('like-count');
const blackHeart = document.getElementById('black-heart');
const redHeart = document.getElementById('red-heart');
const card = document.getElementsByClassName('card')[0];

blackHeart.addEventListener('click', () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";
  const count = parseInt(likeCount.innerText);
  likeCount.innerText = count+1;

  card.style.transform = "translateX(-280px)";
  setTimeout(() => {
    card.style.transform = "translateX(-650px)";
  }, 3000);
})

redHeart.addEventListener('click', () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = parseInt(likeCount.innerText);
  likeCount.innerText = count-1;
  
})

// 실습 4
const commentsCreateForm = document.querySelector('.comments-create-form');
const commentContainer = document.querySelector('.written-comments-container');
const commentInput = document.querySelector('.comment');

const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

	commentId = commentsList.length;
  const commentNode = 
  `
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
  commentsList.splice(id-1, 1);

  commentContainer.innerHTML = commentsList.map((comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`).join('');
}

// 실습 6
const footer = document.querySelector('.footer-message');
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

