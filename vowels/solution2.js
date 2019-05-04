vowelsCount = (str) => {
    const matches = str.match(/[aeiou]/gi);
    count = matches ? matches.length : 0;
    console.log(count);
}

vowelsCount('kanishk Agrawal') // 5 

