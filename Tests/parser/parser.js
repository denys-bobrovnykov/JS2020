const fs = require('fs');
 

fs.readFile('questions.txt', (err, data) => {
    if (err) console.log(err);
    return questObj(data.toString());
});

function questObj(data) {
    let rows = data.split('\n');
    let questions = {};
    let q;
    let answ;
    let qNum;
    for ( let row of rows ) {
        q = row.match(/^\d{1,4}\..*[:?}]/g);
        answ = row.match(/^\d\.\s.*[\p{L}I\d\\)].?$/gu);
        // answ = row.match(/^\d\.\s.+[\p{L}I\d\\)].?$/gu);
        if ( q != null ) {
            qNum = parseInt(row.slice(0,4).split('').join(''));
            questions[qNum] = {'text': q.toString(),'a': {}};

        }
        if ( answ != null && q == null) {
            questions[qNum]['a'][answ[0][0]] = answ[0];
            console.log(qNum);
            console.log(answ);
        }
    }
    fs.writeFile('QuestionsObj.json', JSON.stringify(questions),(err,ok) => console.log('Ok'));
}


 



