
anagrams = (stringA, stringB) =>  console.log(cleanString(stringA) === cleanString(stringB));
cleanString = (string) => string
    .toLowerCase()
    .replace(/[^\w]/g, '')
    .split('')
    .sort()
    .join('');

anagrams('abc!!  kcjdkv Dd', 'bcAA!!!'); // false
anagrams('abc!!', 'ABC'); // true
anagrams('abc!!', 'a  b      c'); // true
