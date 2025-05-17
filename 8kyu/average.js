function updateLight(current) {

    if (current === 'green') {
        return 'yellow';

    } else if (current === 'yellow') {
        return 'red';
    } else if (current === 'red') {
        return 'green';
    }

}

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}