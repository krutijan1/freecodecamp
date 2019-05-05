function notANumber(arg) {
    return typeof arg !== 'number';
}

function addTogether() {
    const args = [...arguments];

    for (const arg of args) {
        if (notANumber(arg)) {
            return undefined;
        }
    }

    if (args.length === 2) {
        return args[0] + args[1];
    }

    return function (arg) {
        if (notANumber(arg)) {
            return undefined;
        }
        return args[0] + arg;
    };
}

addTogether(2, 3);
