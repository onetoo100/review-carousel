import * as rev from "./reviews.js";

const img = document.querySelector(".imagen"),
  author = document.querySelector(".author"),
  job = document.querySelector(".job"),
  comments = document.querySelector(".comments"),
  btnNext = document.querySelector(".btn-next"),
  btnPrev = document.querySelector(".btn-prev"),
  /* btnRamdon = document.querySelector(".btn-ramdom"), */
  reviews = rev.reviews;

let item = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadReview(item);
});

btnNext.addEventListener("click", () => {
  item++;
  if (item >= reviews.length) item = 0;

  loadReview(item);
});

btnPrev.addEventListener("click", () => {
  item--;
  if (item < 0) item = reviews.length - 1;

  loadReview(item);
});

/* btnRamdon.addEventListener("click", () => {
  ramdomReviews();
}); */

function loadReview(person) {
  const { _name, _job, _comment, _img } = reviews[person];

  author.textContent = _name;
  job.textContent = _job;
  comments.textContent = _comment;
  img.style.backgroundImage =
    "linear-gradient(to bottom, transparent 0%, transparent 0%)," + _img;
}

/* function ramdomReviews() {
  item = Math.floor(Math.random() * reviews.length);
  loadReview(item);
} */
