const fs = require('fs');
 

let data = fs.readFile('questions.txt',(err,text) => return text.toString());
console.log(data);

    let rows = data.split('\n');
    let questions = {};
    let q;
    let answ;
    let qNum;
    for ( let row of rows ) {
        q = row.match(/^\d{1,4}\..*[:?}]/g);
        answ = row.match(/^\d\.\s.+\p{L}$/gu);
        if ( q != null ) {
            qNum = parseInt(row.slice(0,4).split('').join(''));
            questions[qNum] = {'text': q.toString(), 'a': {}};
        }
        if ( answ != null ) {
            questions[qNum]['a'][answ[0][0]] = answ[0];
        }
    }
    console.log(questions);
   


 



