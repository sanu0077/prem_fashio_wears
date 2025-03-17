// Countdown Timer Logic
function startCountdown(targetDate) {
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft < 0) {
            document.getElementById("timer").innerHTML = "Store is Open!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateTimer, 1000);
}

// Set target opening date (YYYY, MM (0-11), DD, HH, MM)
const openingDate = new Date(2025, 3, 30, 9, 0).getTime();
startCountdown(openingDate);
