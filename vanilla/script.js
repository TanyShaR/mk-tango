console.log("It works!");

const button = document.querySelector(".first-screen__action");

button.addEventListener("click", () => {
  const modal = document.querySelector(".modal");

  modal.classList.add("modal_active");
});
