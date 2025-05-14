// Change content and styling dynamically
function changeContent() {
  const title = document.getElementById("page-title");
  const intro = document.getElementById("intro");

  title.textContent = "You've Interacted with JavaScript!";
  intro.textContent = "This paragraph's content was changed using JavaScript.";

  // Styling changes
  title.style.color = "crimson";
  intro.style.backgroundColor = "#f0f0f0";
  intro.style.padding = "10px";
  intro.style.borderRadius = "8px";
}

// Add a new box to the container
function addBox() {
  const container = document.getElementById("box-container");
  const box = document.createElement("div");

  box.className = "box";
  box.textContent = "I'm a new box!";
  container.appendChild(box);
}

// Remove the last box
function removeBox() {
  const container = document.getElementById("box-container");
  const lastBox = container.lastElementChild;

  if (lastBox) {
    container.removeChild(lastBox);
  }
}
