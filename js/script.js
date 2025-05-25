const checklistItems = [
  {
    title: "📄 Verify marital status",
    explanation: "Use VA Form 21-686c and ensure the veteran's marriage certificate is present."
  },
  {
    title: "👶 Confirm dependent child documentation",
    explanation: "Check for birth certificates, school enrollment forms, or legal documents."
  },
  {
    title: "🖊️ Ensure all forms are signed and dated",
    explanation: "All submitted forms must be signed by the veteran and correctly dated."
  },
  {
    title: "🔍 Check for conflicting information",
    explanation: "Review the claim file for any previous conflicting entries or records."
  },
  {
    title: "🧾 Review POA information",
    explanation: "Verify Power of Attorney details are updated in all applicable systems."
  }
];

let currentIndex = 0;

function createCard(item, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <p><strong>${item.title}</strong></p>
        <button onclick="flipCard(this)">View Details</button>
      </div>
      <div class="card-back">
        <p>${item.explanation}</p>
        <label><input type="checkbox" onchange="handleCheck(${index})"> Mark as complete</label>
      </div>
    </div>
  `;
  card.classList.add('hidden');
  return card;
}

function flipCard(button) {
  const card = button.closest('.card');
  card.classList.add('flipped');
}

function handleCheck(index) {
  const nextIndex = index + 1;
  if (nextIndex < checklistItems.length) {
    const nextCard = document.getElementById("cards-container").children[nextIndex];
    nextCard.classList.remove('hidden');
  } else {
    document.getElementById("final-question").classList.remove("hidden");
  }
}

function submitFinal() {
  const selected = document.querySelector('input[name="complete"]:checked');
  if (!selected) {
    alert("Please select Yes or No.");
    return;
  }

  if (selected.value === "yes") {
    alert("Checklist complete! Restarting...");
    location.reload();
  } else {
    alert("Please review your responses.");
  }
}

window.onload = () => {
  const container = document.getElementById("cards-container");
  checklistItems.forEach((item, i) => {
    const card = createCard(item, i);
    container.appendChild(card);
  });
  container.children[0].classList.remove("hidden");
};
