// TODO 1
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  history.go(0);
});

// TODO 2
const icon_list = document.querySelector('.icon-list');
const feed_buttons = document.querySelectorAll('.feed-buttons');

icon_list.addEventListener('mouseover', () => {
  icon_list.style.opacity = 0.5;
});
icon_list.addEventListener('mouseout', () => {
  icon_list.style.opacity = 1;
});

feed_buttons.forEach( feed_button => {
  feed_button.addEventListener('mouseover', () => {
    feed_button.style.opacity = 0.5;
  });
  feed_button.addEventListener('mouseout', () => {
    feed_button.style.opacity = 1;
  });
});

// TODO 5
const comment_imoji = document.querySelector('.comment-imoji');
const comment_smile = document.querySelector('.smile');
let imoji_shown = 0;

comment_smile.addEventListener('click', () => {
  if(imoji_shown === 0) {
    comment_imoji.style.display = "block";
    imoji_shown = 1;
  } else {
    comment_imoji.style.display = "none";
    imoji_shown = 0;
  }
});

const imojis = document.querySelectorAll('.imoji');
const imojis_list = ['😂','😮','😍','😅','👏','🤑','🔥','💯','❤️','🥵','🥰','😘','😎','😴']
const comment = document.querySelector('.comment');

imojis.forEach( function(imoji, idx) {
  imoji.addEventListener('click', () => {
    comment.value += imojis_list[idx];
    console.log(imojis_list[idx]);
  })
})