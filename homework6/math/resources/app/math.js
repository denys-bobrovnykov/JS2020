document.addEventListener('DOMContentLoaded', () => {
    // Init elements variables
    const answer = document.querySelector('.answer-input');
    const submitButton = document.querySelector('.answer-submit');
    const nextButton = document.querySelector('.try-again');
    const response = document.querySelector('.answer-check');
    // Set initial state
    let result = displayQuestion();
    // Add event global listener
    document.addEventListener('click', (event) => {
        response.innerHTML = '';
        if ( event.target == submitButton ) {// If click on SUBMIT
            if ( +answer.value != result ) {
                result = displayQuestion();
                response.innerHTML = 'Try again';
                answer.value = '';
                // console.log(result);
                return;
            }
            response.innerHTML = 'Correct';
            answer.value = '';
            result =displayQuestion();
        };
        if ( event.target == nextButton ) { // If click on NEXT
            result = displayQuestion();
            answer.value = '';
        }
    })
})
function random(from, to) {
    return Math.floor(Math.random() * (to - from) + from + 1);
}
function evaluate(num1, num2, operator) {
    switch(operator) {
        case '*': return num1 * num2;
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return num1 / num2;
    }
}
function displayQuestion() {
    const box = document.querySelector('.question-container');
    box.innerHTML = ''; // Clear question box
    const operators = ['+', '-', '/', '*'];
    const operator = operators[random(0, operators.length - 1)];
    const [num1, num2] = operator != '*' ? [random(10,100), random(10,100)] : [random(2,30), random(2,30)];
    box.innerHTML = `${num1} ${operator} ${num2} =`;
    return evaluate(num1, num2, operator).toFixed(1);
}