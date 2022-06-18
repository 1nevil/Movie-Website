const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  const imgno = movielist[index].querySelectorAll("img").length;
  let Clickcounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    Clickcounter++;
    if (imgno - (4 + Clickcounter) + (4 - ratio) >= 0) {
      movielist[index].style.transform = `translateX(${
        movielist[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[index].style.transform = "translateX(0)";
      Clickcounter = 0;
    }
    // console.log(Clickcounter++);
    // console.log(imgno);
    // console.log(imgno - (4 + Clickcounter));
  });
  //   console.log(movielist[index].querySelectorAll("img").length);
});

const button = document.querySelector(".toggal-button");
const items = document.querySelectorAll(
  ".sidebar,.navbar,.left-menu-icon,.menu_item > a,.container,.arrow,.toggal,.toggal-button"
);

button.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
