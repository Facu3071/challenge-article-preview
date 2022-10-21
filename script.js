const btn = document.querySelector(".btn-share");
const authorInfo = document.querySelector(".author-info");
const authorMedia = document.querySelector(".author-social-media");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  authorInfo.classList.toggle("none");
  authorMedia.classList.toggle("none");
});
