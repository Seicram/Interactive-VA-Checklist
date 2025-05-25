function submitChecklist() {
  const complete = document.querySelector('input[name="complete"]:checked');
  if (!complete) {
    alert("Please indicate if the checklist is complete.");
    return;
  }

  const checkedItems = [];
  document.querySelectorAll('.error-list input[type="checkbox"]').forEach(item => {
    if (item.checked) {
      checkedItems.push(item.nextElementSibling.textContent.trim());
    }
  });

  const resultMessage = `
    Checklist Complete: ${complete.value.toUpperCase()}
    Tasks Completed: ${checkedItems.length ? checkedItems.join(', ') : 'None'}
  `;

  alert(resultMessage);
}
