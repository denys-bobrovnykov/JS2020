const str = '1. I';


const answ = str.match(/^\d\.\s.*[\p{L}I\d\\)I].?$/gu);

console.log(answ);