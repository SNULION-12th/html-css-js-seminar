var refreshButtons = document.querySelectorAll(".logo");

refreshButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    window.location.reload();
  });
});

document.getElementById("black-heart").addEventListener("click", function () {
  // Show the notification by moving it from right to left
  document.getElementById("notification").style.right = "0px";
});

window.addEventListener("click", function (e) {
  const notification = document.getElementById("notification");
  const blackHeart = document.getElementById("black-heart");

  // If the clicked target is not the black-heart button and not the notification itself, hide the notification
  if (!notification.contains(e.target) && e.target !== blackHeart) {
    notification.style.right = "-1000px"; // Move it back out of view
  }
});

// Prevent clicks within the notification from closing it
document.getElementById("notification").addEventListener("click", function (e) {
  e.stopPropagation();
});

// 이모지 피커 토글
document.querySelector(".smile").addEventListener("click", function () {
  const emojiPicker = document.getElementById("emoji-picker");
  emojiPicker.style.display =
    emojiPicker.style.display === "none" ? "block" : "none";
});

// 이모지 클릭 시 입력 필드에 삽입
document.querySelectorAll(".emoji").forEach((emoji) => {
  emoji.addEventListener("click", function () {
    const commentInput = document.querySelector(".comment");
    commentInput.value += emoji.textContent; // 이모지 텍스트 삽입
  });
});

// 다른 곳 클릭 시 이모지 선택기 숨기기
window.addEventListener("click", function (e) {
  const emojiPicker = document.getElementById("emoji-picker");
  if (!emojiPicker.contains(e.target) && !e.target.matches(".smile")) {
    emojiPicker.style.display = "none";
  }
});

// .smile 클릭 시 이벤트 전파 방지
document.querySelector(".smile").addEventListener("click", function (e) {
  e.stopPropagation();
});
