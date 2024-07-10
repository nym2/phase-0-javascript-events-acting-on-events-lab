function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left) || 0;
    const newPosition = currentPosition - 10;
    dodger.style.left = `${newPosition}px`;
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left) || 0;
    const newPosition = currentPosition + 10;
    dodger.style.left = `${newPosition}px`;
}