document.addEventListener('DOMContentLoaded', () => {
    // -------------------------  Table element create  ----------------------------------- //
    let table = document.createElement('table');
    const colors = [['#121212', '#2D2F32', '#3A474A', '#AB19B3', '#FDBC2C','#FEEF35', '#FC3551'],
                    ['#191B1D', '#2E353C', '#4C5C5F', '#EB27FB', '#FB1260', '#D70A1E', '#FC1027'],
                    ['#1237B9', '#46629F', '#305FD9', '#20C4D6', '#107D6C', '#15994B', '#1AB06D'],
                    ['#1D4186', '#394F89', '#588EEA', '#A9E3E1', '#37BE61', '#1AB448', '#11853F']
    ];
    const colorsRows = colors.length;
    const colorsCols = colors[0].length;
    for ( let i = 0; i < colorsRows; i++ ) {
        let row = document.createElement('tr');
        for ( let j = 0; j < colorsCols; j++ ) {
            let td = document.createElement('td');
            let div = document.createElement('div');
            div.className = `color-choice`;
            div.style.backgroundColor = colors[i][j];
            div.addEventListener('click', () => {
                document.body.style.backgroundColor = div.style.backgroundColor;
            });
            td.appendChild(div);
            row.appendChild(td);
        }
       table.appendChild(row);
    }
    // ----------------------- Button element create ----------------------------------- //
    let button = document.createElement('button');
    button.className = 'color-reset-button';
    button.innerHTML = 'Reset';
    // Button and table push to <main>
    let main = document.querySelector('main');
    main.appendChild(button);
    main.appendChild(table);
    // ---------------------- Listeners plus actons ------------------------------------ //
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = 'white';
    })
})