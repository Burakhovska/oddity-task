const luckyButton = document.querySelector(".lucky-button");
const googleLogo = document.querySelector(".google-logo");
const oddityLogo = document.querySelector(".oddity-logo");
const luckyInput = document.querySelector(".lucky-input");

luckyButton.addEventListener("click", onClick);

googleLogo.classList.add("active");

function onClick(evt) {
  evt.preventDefault();

  googleLogo.classList.toggle("active");
  oddityLogo.classList.toggle("active");

  const isOddityVisible = oddityLogo.classList.contains("active");

  if (isOddityVisible) {
    luckyInput.value = "Мені пощастило!";
  } else {
    luckyInput.value = "";
  }
}
