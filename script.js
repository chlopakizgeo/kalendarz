const startDate = new Date("2024-12-01T00:00:00"); // Data rozpoczęcia
const endDate = new Date("2024-12-24T23:59:59");  // Data zakończenia

// Funkcja do odblokowywania dni
function unlockDays() {
    const now = new Date();
    const elapsedDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 1; i <= 24; i++) {
        const dayElement = document.getElementById(`day-${i}`);
        if (i <= elapsedDays) {
            dayElement.classList.add('open');
            dayElement.onclick = () => {
                const content = dayElement.querySelector('.content');
                content.classList.toggle('hidden');
            };
        }
    }
}

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
