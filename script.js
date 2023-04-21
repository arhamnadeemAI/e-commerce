const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
// selecting elemnst with de=iffernt id and tags and classes

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
// adding add event listner and doing some functianilty

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// adding add event listner and doing some functianilty
const toggleBtn = document.getElementById('darkomodo');
const body = document.querySelector('body');
// selecting elemnst with de=iffernt id and tags and classes



toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
// adding add event listner and doing some functianilty

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
}
// checking from the window elemwnt