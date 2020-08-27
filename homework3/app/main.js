document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit-1').onclick = () => {
        duplicates();
    }
        
    
})
// ______________________________________________________________

// Task 1.

// Count the number of Duplicates
// Write a function that 
// will return the count of distinct 
// case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain 
// only alphabets (both uppercase and lowercase) and numeric digits.

function duplicates() {
    const input = document.getElementById('sentence');
    const temp = input.value.toLowerCase();
    let obj = {};
    const output = document.getElementById('output-1')
    for(let i = 0; i < temp.length; i++){
        if(temp[i].match(/[a-z][0-9]*/i)) obj[temp[i]] ? obj[temp[i]] += 1 : obj[temp[i]] = 1;
    }
    output.innerHTML = '';
    for(let item in obj){
        let answer = document.createElement('p');
        answer.innerHTML = `${item} : ${obj[item]}`;
        output.appendChild(answer);
    }
}
// ______________________________________________________________

// Task 2

