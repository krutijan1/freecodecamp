function uniteUnique() {
    const result = [];

    for (const array of [...arguments]) {
        for (const element of array) {
            if (!result.includes(element)) {
                result.push(element);
            }
        }
    }

    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
