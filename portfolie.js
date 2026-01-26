console.log("welcome to my portfolio");

// Add click event to toggle the card open/close
document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('open');
});