function destroyer(arr) {
    const numbers = [...arguments].slice(1);

    for (const number of numbers) {
        let index = arr.indexOf(number);
        while (index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(number);
        }
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
