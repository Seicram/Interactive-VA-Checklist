const steps = [
  "Step 1: Verify marital status with VA Form 21-686c and marriage certificate.",
  "Step 2: Review dependent child documentation (birth certificate, school attendance, etc).",
  "Step 3: Confirm all forms are signed and dated.",
  "Step 4: Check for conflicting information in previous claims.",
  "Step 5: Submit checklist to processing queue or supervisor for review."
];

let currentStep = 0;

function renderStep(stepIndex) {
  const stepContent = document.getElementById("step-content");
  stepContent.innerHTML = `<p>${steps[stepIndex]}</p>`;
}

function goToNextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep(currentStep);
  }
}

function goToPreviousStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep(currentStep);
  }
}

function goToHome() {
  currentStep = 0;
  renderStep(currentStep);
}

// Initialize on page load
window.onload = () => {
  renderStep(currentStep);
};
