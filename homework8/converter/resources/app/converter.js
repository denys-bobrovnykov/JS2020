document.addEventListener('DOMContentLoaded', () => {

    const inputForm = document.querySelector('.input-form');
    const outputDiv = document.querySelector('.output-container');

    inputForm.addEventListener('submit', () => {
        event.preventDefault();
        outputDiv.innerHTML = `${ipsBetween(inputForm.firstIp.value, inputForm.secondIp.value)}`;
    })


    function ipsBetween(ip1, ip2) {
        const num1 = ip1.split('.').reverse().reduce((acc,el, i) => +acc + el*(256**i));
        const num2 = ip2.split('.').reverse().reduce((acc,el, i) => +acc + el*(256**i));
        return num2 - num1;
    }
})
