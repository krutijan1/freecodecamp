function rot13(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    let x = str[i].charCodeAt(0);

    if (x < 65 || x > 90) {
      res += String.fromCharCode(x);
    } else if (x < 78) {
      res += String.fromCharCode(x + 13);
    } else {
      res += String.fromCharCode(x - 13);
    }
  }

  return res;
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');

const changes = [
  { name: 'ONE HUNDRED', currency: 100.0 },
  { name: 'TWENTY', currency: 20.0 },
  { name: 'TEN', currency: 10.0 },
  { name: 'FIVE', currency: 5.0 },
  { name: 'ONE', currency: 1.0 },
  { name: 'QUARTER', currency: 0.25 },
  { name: 'DIME', currency: 0.1 },
  { name: 'NICKEL', currency: 0.05 },
  { name: 'PENNY', currency: 0.01 }
];

function handleEdgeCases(register, change, cid) {
  const output = {};

  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }

  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
}

function createChangeArray(register, change) {
  return changes.reduce(function(acc, curr) {
    let value = 0;

    while (register[curr.name] > 0 && change >= curr.currency) {
      change -= curr.currency;
      register[curr.name] -= curr.currency;
      value += curr.currency;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
}

function createRegister(register, cid) {
  return cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
}

function checkCashRegister(price, cash, cid) {
  let output = { status: null, e: [] };
  let change = cash - price;

  let register = createRegister(register, cid);

  const edgeCases = handleEdgeCases(register, change, cid);

  if (edgeCases) {
    return edgeCases;
  }

  const change_arr = createChangeArray(register, change);

  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]);
