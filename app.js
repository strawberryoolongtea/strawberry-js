const h1 = document.querySelector("h1");

function handleTitleClick() {
  // * replace to toggle
  // const clickedClass = "active";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  // * toggle
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
