document.addEventListener('DOMContentLoaded', () => {
    let table = document.createElement('table');
    let classesList = [];
    for ( let i = 0; i < 4; i++ ) {
        let row = document.createElement('tr');
        for ( let j = 0; j < 7; j++ ) {
            let td = document.createElement('td');
            td.className = `td-${i + 1}-${j + 1}`;
            // const span = document.createElement('span');
            // span.innerHTML = 'SPAN';
            // td.appendChild(span);
            row.appendChild(td);
            classesList.push(td.className);
        }
       table.appendChild(row);
    }
    table.addEventListener('click', (element) => {
        if ( element.target.tagName != 'TD' ) return;
        console.log(element.target.closest('td'));
        if ( !element.target.closest('td') ) return;
            document.body.classList.remove('white',...classesList);
            document.body.classList.add(element.target.className);        
    });
    document.querySelector('main').appendChild(table);

    document.querySelector('.color-reset-button').addEventListener('click', () => {
        document.body.classList.remove(...classesList);
        document.body.classList.add('white');
    })

})