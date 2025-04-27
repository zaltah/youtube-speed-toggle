function updateButtonLabel(button, speed) {
    button.innerText = `${speed}x`;
}

function toggleSpeed() {
    const video = document.querySelector('video');
    if (video) {
        // Toggle between 1x and 2x speed, can be changed
        const newSpeed = video.playbackRate === 1 ? 2 : 1;
        video.playbackRate = newSpeed;
        const speedButton = document.querySelector('.toggle-speed-button');
        if (speedButton) {
            updateButtonLabel(speedButton, newSpeed);
        }
    }
}

// Inject button after DOM has finished loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectButton);
} else {
    injectButton();
}


function injectButton() {
    const controlBar = document.querySelector('.ytp-right-controls');
    if (controlBar) {
        const button = document.createElement('button');
        button.className = 'toggle-speed-button';
        button.style.padding = '5px 10px';
        button.style.fontSize = '12px';
        button.style.transform = 'translateY(-20px)';
        button.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        button.style.border = 'none';
        button.style.borderRadius = '2px';
        button.style.marginLeft = '10px';
        button.style.cursor = 'pointer';

        // Initialize button label with current speed
        const initialSpeed = document.querySelector('video') ? document.querySelector('video').playbackRate : 1;
        updateButtonLabel(button, initialSpeed);

        button.onclick = toggleSpeed;

        controlBar.prepend(button); // Adds the button to the taskbar
    }
}