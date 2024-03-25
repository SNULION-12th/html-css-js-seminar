const button = document.querySelector(".smile");
const picker = new EmojiButton({
  position: "bottom-start",
});

button.addEventListener("click", () => {
  picker.togglePicker(button);
});
picker.on("emoji", (emoji) => {
  const text_box = document.querySelector(".comment");
  text_box.value += emoji;
});
