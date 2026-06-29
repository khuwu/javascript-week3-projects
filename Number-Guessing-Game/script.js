let secretNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);

    if (guess < 1 || guess > 100) {
        document.getElementById("message").textContent =
            "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;

    if (guess < secretNumber) {

        document.getElementById("message").textContent =
            "Too Low!";

    }

    else if (guess > secretNumber) {

        document.getElementById("message").textContent =
            "Too High!";

    }

    else {

        document.getElementById("message").textContent =
            "Correct! You guessed the number!";

    }

    document.getElementById("guessInput").value = "";

}

function restartGame() {

    secretNumber = generateRandomNumber();

    attempts = 0;

    document.getElementById("message").textContent =
        "Start guessing!";

    document.getElementById("attempts").textContent =
        "Attempts: 0";

    document.getElementById("guessInput").value = "";

}