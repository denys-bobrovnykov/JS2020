// =============== Main ============================ //
document.addEventListener('DOMContentLoaded', () => {
    const goButton = document.querySelector('.go-button');
    const intervalInput = document.querySelector('.select-interval');
    const control = document.querySelector('.start-control');
    const grid = createTable();
    const cellsList = grid.cells;
    const field = grid.table;
    let counter = document.querySelector('.counter');
    let count = 0;

    goButton.addEventListener('click', () => {
        control.classList.add('hidden');
        fillgrid(intervalInput.value);
    });

    function fillgrid(delay) { // Creates table and fills colors
        field.addEventListener('click', clearCell);
        let timer = setInterval(() => {
            let index = Math.floor(Math.random() * (cellsList.length));
            const cell = cellsList.splice(index, 1)[0];
            cell.style.backgroundColor = `#${Math.random().toString(16).slice(2,8)}`;
            if ( cellsList.length == 0 ) {
                field.removeEventListener('click', clearCell);
                clearInterval(timer);
                let h2 = document.createElement('h2');
                h2.innerHTML = 'Заполнение завершено!';
                document.querySelector('main').append(h2);
                window.scroll(0, document.body.scrollHeight);
            };
        }, delay); 
    }

    function clearCell(event){
        if ( event.target == field ) return;
        if ( event.target.style.backgroundColor ) {
            event.target.style.backgroundColor = '';
            cellsList.push(event.target);
            count++;
            const counterCopy = counter.cloneNode(true);
            counter.parentNode.replaceChild(counterCopy, counter)
            counterCopy.innerHTML = `${count}`;
            counterCopy.classList.add('flash-in');
            counter = counterCopy;
        }
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
        table.className = 'grid';
        document.querySelector('main').append(table);
        return {cells: cells, table: table};
    }    
})
