document.addEventListener("DOMContentLoaded", function () {
  const logoElement = document.querySelector(".logo");

  function refreshPage() {
    location.reload();
  }
  logoElement.addEventListener("click", refreshPage);
});

const logos = document.querySelector(".logo");
const icons = document.querySelector(".icon-list");
const buttons = document.querySelectorAll(".feed-buttons");
const smile = document.querySelector(".smile");
logos.addEventListener("mouseover", () => {
  logos.style.opacity = "0.3";
});
logos.addEventListener("mouseout", () => {
  logos.style.opacity = "1";
});
icons.addEventListener("mouseover", () => {
  icons.style.opacity = "0.3";
});
icons.addEventListener("mouseout", () => {
  icons.style.opacity = "1";
});
buttons.forEach((buttonElement) => {
  buttonElement.addEventListener("mouseover", () => {
    buttonElement.style.opacity = "0.3";
  });
});
buttons.forEach((buttonElement) => {
  buttonElement.addEventListener("mouseout", () => {
    buttonElement.style.opacity = "1";
  });
});
smile.addEventListener("mouseover", () => {
  smile.style.opacity = "0.3";
});
smile.addEventListener("mouseout", () => {
  smile.style.opacity = "1";
});

//TODO3 알림창 만들기
const heartButton = document.getElementById("black-heart");
const alarmContainer = document.querySelector(".alarm-container");
const leftButton = document.querySelector(".alarm-left");

heartButton.addEventListener("click", () => {
  if (alarmContainer.classList.contains("animate")) {
    // 오른쪽에서 왼쪽으로 알림창 뜨게 하기
    alarmContainer.classList.remove("animate");
    alarmContainer.classList.add("animate-reverse");
  } else {
    alarmContainer.classList.add("animate");
    alarmContainer.classList.remove("animate-reverse");
  }
});

leftButton.addEventListener("click", () => {
  if (alarmContainer.classList.contains("animate-reverse")) {
    alarmContainer.classList.remove("animate-reverse");
    alarmContainer.classList.add("animate");
  } else {
    alarmContainer.classList.remove("animate");
    alarmContainer.classList.add("animate-reverse");
  }
});
//TODO4 스토리 모달 만들기
storyModal.addEventListener("click", (event) => {
  if (event.target.id !== "story-image") {
    storyModal.style.display = "none";
  }
});

//TODO5 이모지 생성
const emoticonContainer = document.querySelector(".emoticon-container");
smile.addEventListener("click", () => {
  if (emoticonContainer.style.display === "block") {
    emoticonContainer.style.display = "none";
  } else {
    emoticonContainer.style.display = "block";
  }
});
const emoji = document.querySelectorAll(".emoticon");
emoji.forEach((e) => {
  e.addEventListener("click", () => {
    const txt = document.getElementById(e.id).innerText;
    var inputValue = $(".comment").val();
    inputValue += txt;
    $(".comment").val(inputValue);
    console.log(emoji);
  });
});

const left = document.querySelector(".alarm-left");
// following.addEventListener("click", () => {
//   following.style.display = "none";
//   follow.style.display = "block";
// });
const following = document.querySelector(".following");
const follow = document.querySelector(".follow");
following.addEventListener("click", () => {
  following.style.display = "none";
  follow.style.display = "block";
});
follow.addEventListener("click", () => {
  follow.style.display = "none";
  following.style.display = "block";
});
