// --- DOM Elements ---
const artworkImage = document.getElementById('artwork-image');
const artworkSource = document.getElementById('artwork-source');
const quoteText = document.getElementById('quote-text');
const quoteSource = document.getElementById('quote-source');
const revealButton = document.getElementById('reveal-button');
const shuffleButton = document.getElementById('shuffle-button');
const saveButton = document.getElementById('save-button');

// --- State Variables ---
let currentArtwork = null;
let currentQuote = null;
let sourcesRevealed = false;

// Recently seen queues to avoid immediate repeats
const RECENT_QUEUE_SIZE = 10; // Number of recent items to avoid
let recentArtworks = [];
let recentQuotes = [];

// --- Functions ---

/**
 * Gets a random item from an array, avoiding recently seen items.
 * @param {Array} arr - The array to pick from.
 * @param {Array} recentQueue - Queue of recently seen items.
 * @returns {Object} A randomly selected item.
 */
function getRandomItem(arr, recentQueue) {
    // Check if artworks or quotes exist. If not, log an error.
    // This helps debug if data.js didn't load.
    if (!arr || arr.length === 0) {
        console.error("Data array is missing or empty! Did data.js load correctly and before script.js?");
        return null; // Return null to prevent further errors
    }

    // If array is smaller than or equal to queue size, just pick randomly
    if (arr.length <= RECENT_QUEUE_SIZE) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let newItem;
    let attempts = 0;
    const maxAttempts = 50; // Prevent infinite loop

    do {
        newItem = arr[Math.floor(Math.random() * arr.length)];
        attempts++;
    } while (recentQueue.includes(newItem) && attempts < maxAttempts);

    return newItem;
}

/**
 * Adds an item to the recent queue and maintains the queue size.
 * @param {Object} item - The item to add to the recent queue.
 * @param {Array} recentQueue - The queue to add the item to.
 */
function addToRecentQueue(item, recentQueue) {
    if (item) {
        recentQueue.push(item);
        if (recentQueue.length > RECENT_QUEUE_SIZE) {
            recentQueue.shift(); // Remove oldest item
        }
    }
}

/**
 * Displays a new pairing on the page.
 */
function displayPairing() {
    const newArtwork = getRandomItem(artworks, recentArtworks);
    const newQuote = getRandomItem(quotes, recentQuotes);

    // Only proceed if we successfully got data
    if (newArtwork && newQuote) {
        // Update current items
        currentArtwork = newArtwork;
        currentQuote = newQuote;

        // Add to recent queues
        addToRecentQueue(currentArtwork, recentArtworks);
        addToRecentQueue(currentQuote, recentQuotes);

        artworkImage.src = currentArtwork.image;
        artworkImage.alt = currentArtwork.source.split(',')[0];
        // artworkSource.innerHTML = currentArtwork.source;
        const artworkSourceInfo = document.getElementById('artwork-source');
        artworkSourceInfo.innerHTML = `
            <strong>${currentArtwork.title}</strong><br>
            ${currentArtwork.artist}<br>
            ${currentArtwork.year}<br>
            ${currentArtwork.medium}<br>
            <em>${currentArtwork.credit_line}</em>
            ${currentArtwork.artwork_page_url ? `<br><a href="${currentArtwork.artwork_page_url}" target="_blank">View on source site</a>` : ''}
        `;

        quoteText.innerHTML = `“${currentQuote.text}”`;        
        quoteSource.innerHTML = currentQuote.source;

        hideSources(); // Hide sources on new shuffle
    } else {
        // Display an error or fallback if data wasn't loaded
        document.getElementById('pairing-container').innerHTML =
            "<p>Error: Could not load artwork or quotes. Please check the console (F12) for details.</p>";
    }
}

/**
 * Toggles the visibility of the source information.
 */
function toggleSources() {
    sourcesRevealed = !sourcesRevealed;
    artworkSource.style.display = sourcesRevealed ? 'block' : 'none';
    quoteSource.style.display = sourcesRevealed ? 'block' : 'none';
    revealButton.innerHTML = sourcesRevealed ? 'Hide Source' : 'Reveal Source';
}

/**
 * Hides the source information and resets the button text.
 */
function hideSources() {
    sourcesRevealed = false;
    artworkSource.style.display = 'none';
    quoteSource.style.display = 'none';
    revealButton.innerHTML = 'Reveal Source';
}

/**
 * Saves the current pairing to the browser's local storage.
 */
function savePairing() {
    // Ensure we have a valid pairing before saving
    if (!currentArtwork || !currentQuote) {
        alert("Cannot save, no valid pairing displayed.");
        return;
    }

    const savedPairings = JSON.parse(localStorage.getItem('savedPairings')) || [];
    const newPairing = {
        artwork: currentArtwork,
        quote: currentQuote
    };

    const isDuplicate = savedPairings.some(p =>
        p.artwork.id === newPairing.artwork.id && p.quote.id === newPairing.quote.id
    );

    if (!isDuplicate) {
        savedPairings.push(newPairing);
        localStorage.setItem('savedPairings', JSON.stringify(savedPairings));
        alert('Pairing saved!');
    } else {
        alert('This pairing is already saved.');
    }
}

// --- Event Listeners ---

// Check if buttons exist before adding listeners
if (revealButton && shuffleButton && saveButton) {
    revealButton.addEventListener('click', toggleSources);
    shuffleButton.addEventListener('click', displayPairing);
    saveButton.addEventListener('click', savePairing);

    // Initial Pairing on Load
    // Use DOMContentLoaded to ensure data.js might have loaded, though script order is key
    document.addEventListener('DOMContentLoaded', displayPairing);
} else {
    // This check helps if you're on a page without these buttons
    console.log("Control buttons not found on this page.");
}

// Add a check to ensure 'artworks' and 'quotes' are loaded
window.onload = function() {
    if (typeof artworks === 'undefined' || typeof quotes === 'undefined') {
        console.error("FATAL ERROR: `artworks` or `quotes` not defined. Ensure `data.js` is loaded BEFORE `script.js` in your HTML.");
    } else {
       // If script.js runs on DOMContentLoaded, we might run displayPairing here instead
       // but having it run after the listener setup and DOMContentLoaded is generally safe.
       // We already call displayPairing on DOMContentLoaded.
    }
};
