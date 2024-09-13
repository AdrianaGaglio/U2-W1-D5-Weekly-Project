window.onscroll = () => {
  const scrollY = window.scrollY; // posizione della Y allo scroll
  const header = document.querySelector("header");
  if (scrollY > 200) {
    header.classList.add("white-bg");
  } else {
    header.classList.remove("white-bg");
  }
};
