const cardsContainer = document.getElementById("cardsContainer");
const nameInput = document.getElementById("nameInput");
const createBtn = document.getElementById("createBtn");

const pastelColors = [
  "#fdebd0", "#d6eaf8", "#f9e79f", "#e8daef",
  "#d5f5e3", "#f6ddcc", "#fce4ec", "#e3f2fd",
  "#f5eef8", "#fdf2e9"
];

createBtn.addEventListener("click", () => {
  const fullName = nameInput.value.trim();
  if (fullName !== "") {
    createCard(fullName);
    nameInput.value = "";
  }
});

// Initial card on load
createCard("Anisha Patel");

function createCard(name) {
  const splitName = name.split(" ");
  const first = splitName[0].charAt(0).toUpperCase();
  const last = splitName.length > 1 ? splitName[splitName.length - 1].charAt(0).toUpperCase() : '';
  const initials = first + last;

  const card = document.createElement("div");
  card.className = "card";
  card.style.setProperty('--card-color', getRandomColor());

  const closeBtn = document.createElement("button");
  closeBtn.className = "remove-btn";
  closeBtn.textContent = "❌";
  closeBtn.onclick = () => cardsContainer.removeChild(card);

  const avatar = document.createElement("div");
  avatar.className = "letter";
  avatar.textContent = initials;

  const label = document.createElement("div");
  label.className = "name";
  label.textContent = name;

  card.append(closeBtn, avatar, label);
  cardsContainer.appendChild(card);
}

function getRandomColor() {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}
