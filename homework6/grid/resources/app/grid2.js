// =============== Main ============================ //
document.addEventListener('DOMContentLoaded', () => {
    const goButton = document.querySelector('.go-button');
    const intervalInput = document.querySelector('.select-interval');
    const control = document.querySelector('.start-control');
    
    goButton.addEventListener('click', function handler(){
        control.classList.add('hidden');
        fillgrid(intervalInput.value);
    });    
})
// ============== Functions ======================= //
function fillgrid(delay) { // Creates table and fills colors
    const table = createTable();
    let color = Array(3).fill('');
    let i = 0;
    let timer = setInterval(() => {
        let cell = table[Math.floor(Math.random() * 100)];// select initial cell
        let colorRand = color.map(item => item = Math.floor(Math.random() * 256)); // get random color
        for ( ;cell.classList.contains('done'); ) {// choose unused cell
            cell = table[Math.floor(Math.random() * 100)];
        }
        cell.style.backgroundColor = `rgb(${[...colorRand]})`;// spread color Arr as R G B!!!
        cell.classList.add('done');// add 'done' flag to cell
        if (i == 99) {
            clearInterval(timer);
            let h1 = document.createElement('h1');
            h1.innerHTML = 'Заполнение завершено!';
            document.querySelector('main').append(h1);
            window.scroll(0, document.body.scrollHeight);
        };
        i++;
    }, delay);    
}

function createTable() { // Creates TABLE and returns ARRAY OF CELLS
    const cells = []; // global cells list
    const table = document.createElement('table');
    table.classList.add('grid', 'border'); // should be modified/revised
    for ( let i = 0; i < 10; i++ ) {
        const row = document.createElement('tr');
        for ( let j = 0; j < 10; j++ ) {
            const td = document.createElement('td');
            td.classList.add('border'); // for ruling purposes
            row.append(td);
            cells.push(td);// Push cell to cells
        }
        table.append(row);
    }
    document.querySelector('main').append(table);
    return cells;
}