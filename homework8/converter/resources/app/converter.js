document.addEventListener('DOMContentLoaded', () => {

    const inputForm = document.querySelector('.input-form');
    const outputDiv = document.querySelector('.output-container');

    inputForm.addEventListener('submit', () => {
        event.preventDefault();
        outputDiv.innerHTML = `Ips between: ${ipsBetween(inputForm.firstIp.value, inputForm.secondIp.value)}`;
    })


    function ipsBetween(ip1, ip2) {
        const ips = ["20.0.0.10", "20.0.1.0"];
        const num1 = ip1.split('.').reverse().reduce((acc,el, i) => i >0 ? +acc + +el*(256**i) : el, 0);
        const num2 = ip2.split('.').reverse().reduce((acc,el, i) => i > 0 ?+acc + +el*(256**i) : el, 0);
        return num2 - num1;
    }
})
