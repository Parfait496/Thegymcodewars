function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    let countOfPositives = 0;
    let sumOfNegatives = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countOfPositives++;
        }
        if (input[i] < 0) {
            sumOfNegatives += input[i];
        }
    }
    return [countOfPositives, sumOfNegatives];
}