function sumAll(arr) {
    const [first, second] = arr;
    const start = first < second ? first : second;
    const end = first > second ? first : second;

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

sumAll([1, 4]);
