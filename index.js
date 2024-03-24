// Initialize variables to count the number of heads and tails
let heads = 0;
let tails = 0;

// Select elements from the HTML document
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// Event listener for the flip button
flipBtn.addEventListener("click", () => {
    // Generate a random number (0 or 1) to simulate flipping a coin
    let i = Math.floor(Math.random() * 2);

    // Reset the animation to prevent overlap
    coin.style.animation = "none";

    // If the random number is 1 (heads)
    if (i) {
        // Apply animation to show heads
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        // Increment the heads count
        heads++;
    } else { // If the random number is 0 (tails)
        // Apply animation to show tails
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        // Increment the tails count
        tails++;
    }
    // Update statistics after animation finishes
    setTimeout(updateStats, 3000);
    // Disable the flip button temporarily to prevent rapid clicking
    disableButton();
});

// Function to update the statistics (number of heads and tails)
function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

// Function to disable the flip button temporarily after clicking
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}


// Event listener for the reset button
resetBtn.addEventListener("click", () => {
    // Reset the animation, heads count, and tails count
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    // Update statistics to show zero counts
    updateStats();
})
