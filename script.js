let add = document.querySelector('#add');
let substract = document.querySelector('#substract');

add.addEventListener('click', () => {
    let output = document.querySelector('#output');
    if (parseInt(output.innerText) < 10) {
        let result = parseInt(output.innerText) + 1;
        output.innerText = result;
    } else {
        alert('You have reached the maximum value');
    }
});

substract.addEventListener('click', () => {
    let output = document.querySelector('#output');
    if (parseInt(output.innerText) > 0) {
        let result = parseInt(output.innerText) - 1;
        output.innerText = result;
    } else {
        alert('You have reached the minimum value');
    }
});
