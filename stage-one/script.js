document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current time and day
    const updateTimeAndDay = () => {
        const now = new Date();
        const time = now.toUTCString().split(' ')[4];
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        document.getElementById('time').textContent = time;
        document.getElementById('day').textContent = day;
    };

    // Initial update
    updateTimeAndDay();

    // Update every second
    setInterval(updateTimeAndDay, 1000);
});
