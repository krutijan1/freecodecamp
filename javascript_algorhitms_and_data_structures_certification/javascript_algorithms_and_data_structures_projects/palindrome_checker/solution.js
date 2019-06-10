function palindrome(str) {
  str = str.replace(/[\W_]/g, '');
  str = str.toLowerCase();

  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome('eye');
