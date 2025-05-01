const input = document.getElementById("myNumber"); // Das Eingabefeld für die Zahl
const headline = document.getElementById("headline"); // Die Überschrift, die den aktuellen Status anzeigt
const displayTries = document.getElementById("displayTries"); // Anzeige der Anzahl der Versuche
const guessButton = document.getElementById("guessButton"); // Der Button zum Raten
const resetButton = document.getElementById("resetButton"); // Der Button zum Zurücksetzen des Spiels

// Variablen zur Spielverwaltung
let numberToGuess; // Die zufällig zu ratende Zahl
let tries = 0; // Anzahl der Versuche
let gameOver = false; // Status, ob das Spiel vorbei ist

// Funktion, um ein neues Spiel zu starten
function startNewGame() {
  // Zufällige Zahl zwischen 0 und 100 generieren
  numberToGuess = Math.floor(Math.random() * 101);
  // Versuche zurücksetzen und Status des Spiels auf aktiv setzen
  tries = 0;
  gameOver = false;
  // Anzeige der Versuche und Initialisierung des Spieltexts
  displayTries.textContent = `Versuche: ${tries}`;
  headline.textContent = "Bitte rate die Zahl!";
  // Eingabefeld und Raten-Button wieder aktivieren
  input.disabled = false;
  guessButton.disabled = false;
  // Eingabefeld leeren und den Fokus darauf setzen
  input.value = "";
  input.focus();
}

// Funktion, die beim Raten der Zahl aufgerufen wird
function guessTheNumber() {
  // Wenn das Spiel vorbei ist, nichts mehr tun
  if (gameOver) return;

  // Eingabewert in eine Zahl umwandeln
  const guess = parseInt(input.value);
  // Wenn der eingegebene Wert keine Zahl ist, nichts tun
  if (isNaN(guess)) return;

  // Versuche erhöhen und Anzeige aktualisieren
  tries++;
  displayTries.textContent = `Versuche: ${tries}`;

  // Überprüfen, ob die geratene Zahl korrekt ist
  if (guess === numberToGuess) {
    headline.textContent = "Du hast gewonnen!!!🎉😍🪻"; // Gewinn-Nachricht
    new JSConfetti().addConfetti(); // Konfetti-Effekt bei Gewinn
    input.disabled = true; // Eingabefeld deaktivieren
    guessButton.disabled = true; // Raten-Button deaktivieren
    gameOver = true; // Spiel als beendet markieren
  } else if (guess < numberToGuess) {
    headline.textContent = "Die Zahl ist größer! 😉"; // Hinweis: Zahl ist größer
  } else {
    headline.textContent = "Die Zahl ist kleiner! 😉"; // Hinweis: Zahl ist kleiner
  }

  // Eingabefeld zurücksetzen und den Fokus darauf setzen
  input.value = "";
  input.focus();
}

// Funktion zum Zurücksetzen des Spiels (neues Spiel starten)
function resetGame() {
  startNewGame(); // Startet das Spiel neu
}

// Neues Spiel direkt beim Laden der Seite starten
startNewGame();
