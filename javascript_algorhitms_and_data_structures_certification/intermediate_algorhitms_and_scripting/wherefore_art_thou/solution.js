function add(obj, srcKeys, source) {
    for (let i = 0; i < srcKeys.length; i++) {
        if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
            return false;
        }
    }
    return true;
}

function whatIsInAName(collection, source) {
    // What's in a name?
    const arr = [];

    // Only change code below this line
    const srcKeys = Object.keys(source);

    for (const obj of collection) {
        if (add(obj, srcKeys, source)) {
            arr.push(obj);
        }
    }

    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
