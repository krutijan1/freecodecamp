function gcd(a, b) {
    while (b > 0) {
        let tmp = a;
        a = b;
        b = tmp % b;
    }
    return a;
}

function lcm(a, b) {
    return (a * b / gcd(a, b));
}

function smallestCommons(arr) {

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let smallestCommon = lcm(min, min + 1);

    while (min < max) {
        min++;
        smallestCommon = lcm(smallestCommon, min);
    }

    return smallestCommon;
}

smallestCommons([1, 5]);
