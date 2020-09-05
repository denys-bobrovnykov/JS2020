document.addEventListener('DOMContentLoaded', () => {
    
    const area = document.createElement('div');
    area.classList.add('grid', 'border');
    document.querySelector('main').append(area);
    let i = 0;
    let placeSquare = setInterval(() => {
        const square = document.createElement('div');
        square.width = square.height = '60px';
        
    }, 100);

})