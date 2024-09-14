window.onscroll = () => {
  const scrollY = window.scrollY; // posizione della Y allo scroll
  const header = document.querySelector("header");
  if (scrollY > 300) {
    header.classList.add("white-bg");
  } else {
    header.classList.remove("white-bg");
  }
  if (scrollY >= 850) {
    const sidebar = document.querySelector("aside div");
    const top = sidebar.getBoundingClientRect().top;
    const width = sidebar.getBoundingClientRect().width;
    const height = sidebar.getBoundingClientRect().height;
    const right = sidebar.getBoundingClientRect().right - width;
    const bottom = sidebar.getBoundingClientRect().bottom - height;
    const left = sidebar.getBoundingClientRect().left;
    sidebar.style.width = width + "px";
    sidebar.classList.add("sticky");
  }
};
