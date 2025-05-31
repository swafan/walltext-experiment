document.addEventListener('DOMContentLoaded', () => {
    const savedContainer = document.getElementById('saved-container');
    const savedPairings = JSON.parse(localStorage.getItem('savedPairings')) || [];

    if (savedPairings.length === 0) {
        savedContainer.innerHTML += '<p style="text-align: center;">You haven\'t saved any pairings yet.</p>';
        return;
    }

    savedPairings.forEach((pairing, index) => {
        const pairingDiv = document.createElement('div');
        pairingDiv.classList.add('saved-pairing');
        pairingDiv.setAttribute('data-index', index);

        pairingDiv.innerHTML = `
            <div class="artwork">
                <img src="${pairing.artwork.image}" alt="${pairing.artwork.source.split(',')[0]}">
                <p class="source">${pairing.artwork.source}</p>
            </div>
            <div class="text">
                <p>"${pairing.quote.text}"</p>
                <p class="source">${pairing.quote.source}</p>
                <button class="remove-button" onclick="removePairing(${index})">Remove</button>
            </div>
        `;
        savedContainer.appendChild(pairingDiv);
    });
});

function removePairing(indexToRemove) {
    let savedPairings = JSON.parse(localStorage.getItem('savedPairings')) || [];
    savedPairings = savedPairings.filter((_, index) => index !== indexToRemove);
    localStorage.setItem('savedPairings', JSON.stringify(savedPairings));
    // Reload the page to reflect changes (simple approach)
    window.location.reload();
}
