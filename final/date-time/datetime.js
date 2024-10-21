function updateSeconds() {
    const numElement = document.querySelector('.num');
    if (numElement) { 
        const now = new Date();
        const seconds = now.getSeconds();
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        numElement.textContent = formattedSeconds; 
    }
}

setInterval(updateSeconds, 1000);
updateSeconds();