capitalize = (str) => {
  let res = '';
  const arr = str.split(' ');

  for (let word of arr) {
    res = res + word[0].toUpperCase() + word.slice(1) + ' ';
  }
  return res.trimEnd();
}

capitalize('hello World');
capitalize('hello I am Kanishk agrawal');
