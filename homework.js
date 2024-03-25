const headerLogo = document.querySelector(".header").querySelector(".logo");

if (headerLogo)
  headerLogo.addEventListener("click", () => location.reload(true));

const changeOpacity = (target, opacity) => (target.style.opacity = opacity);

const addMouseOverAndOutEvent = (target) => {
  target.addEventListener("mouseover", (e) =>
    changeOpacity(e.currentTarget, 0.5)
  );
  target.addEventListener("mouseout", (e) => changeOpacity(e.currentTarget, 1));
};

const iconList = document.querySelector(".icon-list");
if (iconList) addMouseOverAndOutEvent(iconList);

const articleMenu = document
  .querySelector(".profile-container")
  ?.querySelector(".menu");
if (articleMenu) addMouseOverAndOutEvent(articleMenu);

const articleButtons = document
  .querySelector(".button-container")
  ?.querySelectorAll(".feed-buttons");

if (articleButtons.length > 0)
  articleButtons.forEach((button) => addMouseOverAndOutEvent(button));

const articleCommentSmile = document.querySelector(".smile");
if (articleCommentSmile) addMouseOverAndOutEvent(articleCommentSmile);

function createNotifyTemplate() {
  const likeNotifyTemplate = document.createElement("template");
  likeNotifyTemplate.innerHTML = `<div class="likeNotification-container">
    <div class="notification">
      <img src="" alt="who-likes-profile" class="like-wholikesProfile" />
      <div class="like-wholikes"></div>
      <div class='like-feedImage'>
      </div>
    </div> 
  </div>`;

  return likeNotifyTemplate;
}

//@type whoLikes = {src: string, name: string}

function likeNotification(feedImage, whoLikes) {
  const content = createNotifyTemplate().content.firstElementChild;
  content
    .querySelector(".like-wholikesProfile")
    .setAttribute("src", whoLikes.src);
  content
    .querySelector(".like-feedImage")
    .setAttribute("style", `background-image: url(${feedImage})`);
  content.querySelector(
    ".like-wholikes"
  ).innerHTML = `<em>${whoLikes.name}</em>님이 게시물을 <br/>좋아합니다.`;

  document.querySelector(".notification-area").appendChild(content);

  content.addEventListener("animationend", (e) => {
    document.querySelector(".notification-area").removeChild(e.currentTarget);
  });
}

document.getElementById("black-heart").addEventListener("click", (e) => {
  const feed = e.currentTarget.parentNode.parentNode;
  if (feed) {
    const feedImage = feed.querySelector(".article").getAttribute("src");
    likeNotification(feedImage, {
      src: "./images/profile.png",
      name: "taehyeungkim98",
    });
  }
});

const storyModal = document.querySelector(".story-modal");

if (storyModal) {
  storyModal
    .querySelector("img")
    .addEventListener("click", (e) => e.stopPropagation());
  storyModal.addEventListener(
    "click",
    (e) => (e.currentTarget.style.display = "none")
  );
}

function makeEmoticionsContainer(...emos) {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="emoticons-wrapper">
      <h3 class="emoticons-header">최고순위 이모티콘</h3>
      <div class = "emoticons-container"></div>
    </div>
  `;
  const container = template.content.firstElementChild;

  emos.forEach((emo) => {
    const indivEmoContainer = document.createElement("div");
    indivEmoContainer.classList.add("emoticon");
    indivEmoContainer.textContent = emo;
    container
      .querySelector(".emoticons-container")
      .appendChild(indivEmoContainer);
    indivEmoContainer.addEventListener("click", (e) => {
      document.querySelector(".comment").value += e.currentTarget.textContent;
    });
  });
  return container;
}

document.querySelectorAll(".comment-container").forEach((c) => {
  const emoticons = makeEmoticionsContainer(
    "😍",
    "🎉",
    "🌟",
    "☃️",
    "📌",
    "😁",
    "🙏"
  );
  emoticons.addEventListener("animationend", (e) => {
    if (e.currentTarget.classList.contains("emoticons-disappear")) {
      e.currentTarget.style.display = "none";
      e.currentTarget.classList.remove("emoticons-disappear");
    }
  });
  c.insertAdjacentElement("afterend", emoticons);
  emoticons.setAttribute(
    "style",
    `top: -${commentContainer.offsetHeight + emoticons.offsetHeight}px`
  );
  emoticons.style.display = "none";
});

document.querySelector(".smile").addEventListener("click", (e) => {
  e.currentTarget.value =
    e.currentTarget.value === "visible" ? "invisible" : "visible";

  const emoticons = e.currentTarget.parentNode.nextSibling;

  if (e.currentTarget.value === "visible") {
    emoticons.classList.remove("emoticons-disappear");
    emoticons.classList.add("emoticons-appear");
    emoticons.style.display = "block";
  } else {
    // emoticons.style.display = "none";
    emoticons.classList.remove("emoticons-appear");
    emoticons.classList.add("emoticons-disappear");
  }
});
