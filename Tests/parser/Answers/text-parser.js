const fs = require('fs');
 

fs.readFile('answers.txt', (err, data) => {
    if (err) console.log(err);
    questObj(data.toString());
});

function questObj(data) {
    let rows = data.split(/\n/);
    let answers = {};
    let answ;
    let aNum;
    for ( let row of rows ) {
        answ = row.match(/^\d{1,4}\..+/g);
        // answ = row.match(/^\d{1,4}\..+/g);
        if ( answ != null ) {
            aNum = parseInt(row.slice(0,4).split('').join(''));
            let value = answ[0].slice(aNum.toString().length+1,row.length).split(/[\s.]/).join('');
            // let value = answ[0].slice(aNum.toString().length+1,row.length).split(' ').join('');
            if ( value.includes('-') ) {
                console.log('yes');
                let arr = [];
                for ( let i = +value[0], j = 0; i <= +value[value.length - 1]; i++, j++ ) {
                    arr[j] = i;
                }
               value = arr.join(',');
            }
            answers[aNum] = value;
            console.log(answ);
        }
    }
    fs.writeFile('answersObj.json', JSON.stringify(answers),(err,ok) => console.log('Ok'));
}


 



