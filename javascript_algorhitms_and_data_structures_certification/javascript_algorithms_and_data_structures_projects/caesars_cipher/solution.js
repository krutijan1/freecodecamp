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
