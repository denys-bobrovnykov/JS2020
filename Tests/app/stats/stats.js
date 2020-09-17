document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.stats-container').innerHTML = localStorage.getItem('wrongAnswers');
})