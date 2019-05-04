capitalize = (str) => {
    const words = []
    const arr = str.split(' ');
  
    for (let word of arr) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
  }
  
  capitalize('hello World');
  capitalize('hello I am Kanishk agrawal');
  