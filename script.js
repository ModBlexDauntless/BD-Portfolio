function addRecommendation() {
  const recInput = document.getElementById("new_recommendation");
  const recName = document.getElementById("rec_name");
  const recValue = recInput.value.trim() || "";
  const nameValue = recName.value.trim() || "Anonymous";

  if (recValue.length > 0) {
    // (1) Add recommendation to the DOM
    const recContainer = document.getElementById("all_recommendations");
    const newDiv = document.createElement("div");
    newDiv.classList.add("recommendation");
    newDiv.innerHTML = `
      <span>&#8220;</span>
      ${recValue} - <strong>${nameValue}</strong>
      <span>&#8221;</span>
    `;
    recContainer.appendChild(newDiv);

    // (2) Clear the textarea
    recInput.value = "";
    recName.value = "";

    // (3) Now show the popup
    showPopup(true);
  }
}

function showPopup(flag) {
  const popup = document.getElementById("popup");
  if (flag) {
    popup.classList.add("show");
  } else {
    popup.classList.remove("show");
  }
}
