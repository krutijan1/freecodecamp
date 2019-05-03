function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
}

function diffArray(arr1, arr2) {
    const res = [];
    res.push(...diff(arr1, arr2));
    res.push(...diff(arr2, arr1));
    return res;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
