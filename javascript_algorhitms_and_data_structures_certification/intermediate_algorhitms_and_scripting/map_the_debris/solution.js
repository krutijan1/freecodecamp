const getOrbPeriod = function (obj) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);

    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;

    return obj;
};

function orbitalPeriod(arr) {
    const newArr = [];

    for (const elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;

}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
