document.addEventListener('DOMContentLoaded', () => {
    let table = document.createElement('table');
    let classesList = [];
    for ( let i = 0; i < 4; i++ ) {
        let row = document.createElement('tr');
        for ( let j = 0; j < 7; j++ ) {
            let td = document.createElement('td');
            td.className = `td-${i + 1}-${j + 1}`;
            row.appendChild(td);
            classesList.push(td.className);
        }
       table.appendChild(row);
    }
    table.addEventListener('click', (element) => {
        if ( element.target.closest('td') ) {
            document.body.classList.remove('white',...classesList);
            document.body.classList.add(element.target.className);

        }
    });
    document.querySelector('main').appendChild(table);

    document.querySelector('.color-reset-button').addEventListener('click', () => {
        document.body.classList.remove(...classesList);
        document.body.classList.add('white');
    })

})