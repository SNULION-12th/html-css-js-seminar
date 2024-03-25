const header = document.querySelector("header");
header.addEventListener("click", () => {
  location.reload();
});

const iconList = document.querySelector(".icon-list");

iconList.addEventListener("mouseover", () => {
  iconList.style.opacity = "0.5";
});

iconList.addEventListener("mouseout", () => {
  iconList.style.opacity = "1";
});

const feedButtons = document.querySelectorAll(".feed-buttons");
feedButtons.forEach((feedButton) => {

  feedButton.addEventListener("mouseover", () => {
    feedButton.style.opacity = "0.5";
  });
  feedButton.addEventListener("mouseout", () => {
    feedButton.style.opacity = "1";
  });
});


const likeButton = document.getElementById('black-heart');
const notification = document.getElementById('notification');

likeButton.addEventListener('click', () => {
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
});

const smileEmoji = document.querySelector(".smile");
const emojiPickerContainer = document.createElement("div");

const popularEmojis = ['😂', '😮', '😍', '😢', '👏', '🔥', '🎉', '💯', '❤️', '😂', '😘', '😴', '😭', '😊'];

popularEmojis.forEach(emoji => {
  const emojiSpan = document.createElement("span");
  emojiSpan.textContent = emoji;
  emojiSpan.style.cursor = 'pointer';
  emojiSpan.style.margin = '5px';
  emojiSpan.addEventListener("click", () => {
    commentInput.value += emoji; 
    emojiPickerContainer.style.display = "none";
  });
  emojiPickerContainer.appendChild(emojiSpan);
});

emojiPickerContainer.style.position = "absolute";
emojiPickerContainer.style.display = "none";
emojiPickerContainer.style.flexWrap = "wrap";
emojiPickerContainer.style.justifyContent = "space-around";
emojiPickerContainer.style.padding = "5px";
emojiPickerContainer.style.boxShadow = "0px 0px 5px #000";
emojiPickerContainer.style.background = "#FFF";
emojiPickerContainer.style.borderRadius = "10px";
emojiPickerContainer.style.width = "fit-content";

smileEmoji.parentElement.appendChild(emojiPickerContainer);

smileEmoji.addEventListener("click", (event) => {
  const smileRect = smileEmoji.getBoundingClientRect();
  emojiPickerContainer.style.display = "flex";
  emojiPickerContainer.style.position = "absolute";
  emojiPickerContainer.style.zIndex = "1000";
  emojiPickerContainer.style.top = `${smileRect.top - emojiPickerContainer.offsetHeight - 5}px`;
  emojiPickerContainer.style.left = `${smileRect.left}px`;
  event.stopPropagation();
});

document.body.addEventListener("click", (event) => {
  if (!emojiPickerContainer.contains(event.target) && !smileEmoji.contains(event.target)) {
    emojiPickerContainer.style.display = "none";
  }
});
