steps = (n) => {
    let result = '';
    for(let i=1; i<=n; i++) {
        let spaces = n-i;        
        for(let j=0;j<i;j++) {
            result += '#';
        }
        
        for(let k=0;k<spaces;k++) {
            result += ' ';
        }
        result +='\n'

    }
    console.log(result);
}

steps(2);   