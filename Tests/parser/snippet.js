const str = '1. I';


const answ = str.match(/^\d\.\s.*[\p{L}I\d\\)I].?$/gu);

let tasksArr = [["ewrwe", "23:04"],
["423523", "05:35"],
["5235", "05:35"],
["23523", "23:23"],
["23532", "05:35"]];
let i = tasksArr.indexOf(tasksArr.find(el => el[0] == "23532"));
console.log(i);
console.log(tasksArr);
