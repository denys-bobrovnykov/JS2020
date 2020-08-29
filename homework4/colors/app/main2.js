document.addEventListener('DOMContentLoaded', () => {

    let table = document.createElement('table');
    const colors = [['rgb(15, 15, 15)', 'rgb(34, 35, 38)', 'rgb(44, 55, 58)', 'rgb(154, 0, 166)', 'rgb(253, 177,9)','rgb(254,239,53)', 'rgb(252,53,81)'],
                    ['rgb(25, 27, 29)', 'rgb(46, 53, 60)', 'rgb(76, 92, 95)', 'rgb(235, 39,251)', 'rgb(251, 18, 96)', 'rgb(215,10,30)', 'rgb(252,16,39)'],
                    ['rgb(18,55,185)', 'rgb(70,98,159)', 'rgb(48,95,218)', 'rgb(32,196,214)', 'rgb(16,125,108)', 'rgb(21,153,75)', 'rgb(26,175,108)'],
                    ['rgb(30,66,137)', 'rgb(57,80,138)', 'rgb(94,152,250)', 'rgb(170,228,226)', 'rgb(57,196,100)', 'rgb(27,184,73)', 'rgb(17,136,64)']
    ];
    for ( let i = 0; i < colors.length; i++ ) {
        let row = document.createElement('tr');
        for ( let j = 0; j < colors[i].length; j++ ) {
            let td = document.createElement('td');
            let div = document.createElement('div');
            div.className = `choice ${i}-${j}`;
            div.style.backgroundColor = colors[i][j];
            td.appendChild(div);
            row.appendChild(td);
        }
       table.appendChild(row);
    }
    let button = document.createElement('button');
    button.className = 'color-reset-button';
    button.innerHTML = 'Reset';
    document.querySelector('main').appendChild(button);
    document.querySelector('main').appendChild(table);

        document.querySelector('.color-reset-button').addEventListener('click', () => {
        document.body.style.backgroundColor = 'white';
    })

    const cells = document.querySelectorAll('.choice');
    cells.forEach((color) => {
        color.addEventListener('click', () => {
            document.body.style.backgroundColor = color.style.backgroundColor;
        })
    })
})