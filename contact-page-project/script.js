const openBtn = document.querySelector("a#open");
const cancelBtn = document.querySelector("a#cancel");

function openForm() {
  document.querySelector(".main-card-before").classList.toggle("hide");
  document.querySelector(".bot-card-before").classList.toggle("hide");
  document.querySelector(".main-card-after").classList.toggle("show");
  document.querySelector(".bot-card-after").classList.toggle("show");
  document.querySelector(".top-card .small-name").classList.toggle("small");
  document.querySelector(".avatar img").classList.toggle("small");
}

function cancelForm() {
  document.querySelector(".main-card-before").classList.toggle("hide");
  document.querySelector(".bot-card-before").classList.toggle("hide");
  document.querySelector(".main-card-after").classList.toggle("show");
  document.querySelector(".bot-card-after").classList.toggle("show");
  document.querySelector(".top-card .small-name").classList.toggle("small");
  document.querySelector(".avatar img").classList.toggle("small");
}

openBtn.addEventListener("click", openForm);
cancelBtn.addEventListener("click", cancelForm);



const a = 10;
const b = 10;

if (a > b) {
  console.log("a is bigger than b.");
} else if (a === b) {
  console.log("a equals b.");
} else {
  console.log("a is smaller than b.");
}