anagrams = (stringA, stringB) => {
    const aCharMap = makeCharMap(stringA); 
    const bCharMap = makeCharMap(stringB); 
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
    for (let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) return false; 
    }
    return true
}

makeCharMap = (string) => {
    const cleanString = string.replace(/[^\w]/g, '').toLowerCase();
    const charMap = {};
    for (let char of cleanString) {
        charMap[char] = charMap[char]+1 || 1; 
    }
    return charMap;
} 

anagrams('abc!!  kcjdkv Dd', 'bcAA!!!'); // false
anagrams('abc!!', 'ABC'); // true
anagrams('abc!!', 'a  b      c'); // true