const slides = document.querySelectorAll(".slide");
console.log(slides);
const body = document.querySelector("body");

const leftArr = document.querySelector(".left");
const rightArr = document.querySelector(".right");
let curSlide = 0;

rightArr.addEventListener("click", () => moveRight());

leftArr.addEventListener("click", () => moveLeft());

function moveRight() {
  curSlide + 1 >= slides.length ? (curSlide = 0) : curSlide++;
  console.log(curSlide);

  toggle();
}

function moveLeft() {
  curSlide <= 0 ? (curSlide = slides.length - 1) : curSlide--;
  toggle();
  console.log(curSlide);
}

function toggle() {
  slides.forEach((slide, i) => {
    if (i === curSlide) {
      slide.classList.add("active");
      body.style.backgroundImage = slides[curSlide].style.backgroundImage;
    } else {
      slide.classList.remove("active");
    }
  });
}
