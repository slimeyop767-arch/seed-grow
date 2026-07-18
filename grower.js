const button = document.getElementById('startBtn');
const dropdownContainer = document.getElementById('dropdown-container');
const seedSelect = document.getElementById('seedselect');
const revealedContents = document.querySelectorAll('.revealed-content');

function hideAllSeedInfo() {
    revealedContents.forEach((div) => {
        div.style.display = 'none';
    });
}

function toggleReveal(seedType) {
    hideAllSeedInfo();
    if (!seedType) {
        return;
    }
    const selectedSeedDiv = document.getElementById(`${seedType}-information`);
    if (selectedSeedDiv) {
        selectedSeedDiv.style.display = 'block';
    }
}

button.addEventListener('click', () => {
    dropdownContainer.style.display = 'block';
});

seedSelect.addEventListener('change', () => {
    toggleReveal(seedSelect.value);
});

// Ensure everything starts hidden on page load.
hideAllSeedInfo();
