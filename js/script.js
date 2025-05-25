function flipCard(button) {
  const card = button.closest('.card');
  card.classList.add('flipped');
}

function unlockNext(checkbox) {
  const currentCard = checkbox.closest('.card');
  const allCards = Array.from(document.querySelectorAll('.card'));
  const currentIndex = allCards.indexOf(currentCard);

  if (currentIndex >= 0 && currentIndex + 1 < allCards.length) {
    allCards[currentIndex + 1].classList.remove('hidden');
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
