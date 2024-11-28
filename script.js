const startDate = new Date("2024-12-01T00:00:00"); // Data rozpoczęcia
const endDate = new Date("2024-12-24T23:59:59");  // Data zakończenia

// Miejsca na treści 24 zadań
const tasks = [
    "Treść zadania 1",  // Wklej tutaj treść zadania 1
    "Treść zadania 2",  // Wklej tutaj treść zadania 2
    "Treść zadania 3",  // Wklej tutaj treść zadania 3
    "Treść zadania 4",  // Wklej tutaj treść zadania 4
    "Treść zadania 5",  // Wklej tutaj treść zadania 5
    "Treść zadania 6",  // Wklej tutaj treść zadania 6
    "Treść zadania 7",  // Wklej tutaj treść zadania 7
    "Treść zadania 8",  // Wklej tutaj treść zadania 8
    "Treść zadania 9",  // Wklej tutaj treść zadania 9
    "Treść zadania 10", // Wklej tutaj treść zadania 10
    "Treść zadania 11", // Wklej tutaj treść zadania 11
    "Treść zadania 12", // Wklej tutaj treść zadania 12
    "Treść zadania 13", // Wklej tutaj treść zadania 13
    "Treść zadania 14", // Wklej tutaj treść zadania 14
    "Treść zadania 15", // Wklej tutaj treść zadania 15
    "Treść zadania 16", // Wklej tutaj treść zadania 16
    "Treść zadania 17", // Wklej tutaj treść zadania 17
    "Treść zadania 18", // Wklej tutaj treść zadania 18
    "Treść zadania 19", // Wklej tutaj treść zadania 19
    "Treść zadania 20", // Wklej tutaj treść zadania 20
    "Treść zadania 21", // Wklej tutaj treść zadania 21
    "Treść zadania 22", // Wklej tutaj treść zadania 22
    "Treść zadania 23", // Wklej tutaj treść zadania 23
    "Treść zadania 24", // Wklej tutaj treść zadania 24
];

// Funkcja do odblokowywania dni
function unlockDays() {
    const now = new Date();
    const elapsedDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 1; i <= 24; i++) {
        const dayElement = document.getElementById(`day-${i}`);
        if (i <= elapsedDays) {
            dayElement.classList.add('open');
            dayElement.onclick = () => showTask(i);
        }
    }
}

// Wyświetlanie zadania w popupie
function showTask(day) {
    const popup = document.getElementById("task-popup");
    const title = document.getElementById("task-title");
    const text = document.getElementById("task-text");

    title.textContent = `🎄 Zadanie ${day} 🎄`;
    text.textContent = tasks[day - 1];
    popup.classList.remove("hidden");
}

// Ukrywanie popupu
document.getElementById("close-popup").onclick = () => {
    document.getElementById("task-popup").classList.add("hidden");
};

// Odliczanie czasu do odblokowania następnego zadania
function updateCountdown() {
    const now = new Date();
    const nextDay = new Date(startDate.getTime() + Math.floor((now - startDate) / (1000 * 60 * 60 * 24) + 1) * 24 * 60 * 60 * 1000);
    const timeRemaining = nextDay - now;

    if (timeRemaining > 0) {
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        document.getElementById('timer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Tworzenie animowanego śniegu
function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Inicjalizacja
function init() {
    unlockDays();
    setInterval(updateCountdown, 1000);
    setInterval(createSnowflakes, 200);
}

init();
