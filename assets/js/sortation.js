const result = document.getElementById('result');
const button = document.getElementById('submit');
const dropdown = document.getElementById('dropdown');

console.log("loaded");

function radixSort(array) {
    const max = getMax(array);

    for(let i = 0; i < max; i++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for(let j = 0; j < array.length; j++) {
            let digit = getDigit(array[j], i);
            buckets[digit].push(array[j]);
        }

        array = [].concat(...buckets);
    }

    return array;
}

function radixReverse(array) {
    const reverse = radixSort(array);

    return reverse.reverse();
}

function getMax(array) {
    let maxDigits = 0;

     for (let i = 0; i < array.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(array[i]));
    }

    return maxDigits;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  

function sort(id) {
    console.log("sort()");
    const input = document.getElementById('input');
    const newLocal = /^\d+( \d+)*$/;
    const text = !newLocal.test(input.value);

    console.log("text: " + text + ", switch(), id:" + id);
    switch(id.toString()) {
        // number
        case "11":
            console.log("11!");
            if(!text) {
                console.log("running");
                const numbers = input.value.trim().split(' ').map(Number);
                console.log(numbers.length);
                if(numbers.every(Number.isInteger)) {
                    result.textContent = radixSort(numbers);
                    break;
                }
            }
            break;
        case "12":
            if(!text) {
                console.log("running");
                const numbers = input.value.trim().split(' ').map(Number);
                console.log(numbers.length);
                if(numbers.every(Number.isInteger)) {
                    result.textContent = radixReverse(numbers);
                    break;
                }
            }
            break;
        // text
        case "13":
            if(text) {
                console.log("running");

            }
            break;
        case "14":
            if(text) {

            }
            break;
        default:
            result.textContent = "Invalid entry";
            break;
    }
}

button.addEventListener('click', function() { 
    console.log("running"); 
    sort(dropdown.options[dropdown.selectedIndex].value); 
});