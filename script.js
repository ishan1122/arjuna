document.getElementById("diyaContainer").addEventListener("click", lightDiya);

// Function to handle diya lighting
function lightDiya() {
    const diya = document.getElementById("diya");
    diya.src = "unlit_diya.jpeg"; // Change to the lit diya image

    // Show QR code and message
    document.getElementById("qrMessage").classList.remove("hidden");

    // Play firework sound
    const fireworkSound = document.getElementById("fireworkSound");
    fireworkSound.play();

    // Start fireworks animation
    startFireworks();

    // Disable further clicks
    diya.removeEventListener("click", lightDiya);
}

// Function to start fireworks
function startFireworks() {
    const container = document.getElementById("fireworksContainer");
    container.classList.remove("hidden");

    // Generate multiple fireworks
    for (let i = 0; i < 20; i++) {
        createFirework(container);
    }
}

// Function to create a firework
function createFirework(container) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    container.appendChild(firework);

    // Remove the firework after animation ends
    firework.addEventListener("animationend", () => firework.remove());
}

// Share custom wish on WhatsApp
document.getElementById('whatsappShare').addEventListener('click', function () {
    const userName = prompt("Please enter your name:"); // Prompt for user's name
    if (userName) {
        const message = `Happy Diwali, ${userName}! Wishing you joy, prosperity, and happiness. 🎉🌟`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert("You need to enter a name to share your wish!"); // Alert if no name is entered
    }
});
// Share custom wish on WhatsApp
document.getElementById('whatsappShare').addEventListener('click', function () {
    const userName = prompt("Please enter your name:"); // Prompt for user's name
    if (userName) {
        // Update the heading to include the user's name
        document.querySelector('h1').innerText = `Happy Diwali from ${userName}!`;

        const message = `Happy Diwali,! Wishing you joy, prosperity, and happiness. 🎉🌟
        from  ${userName}
        https://ishan1122.github.io/arjuna/`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert("You need to enter a name to share your wish!"); // Alert if no name is entered
    }
});

