capitalize = (str) => {
   let result = str[0].toUpperCase();
   for (let i=1; i<str.length; i++) {
       if(str[i-1] == ' ') {
           result = result + str[i].toUpperCase()
       } else {
           result = result + str[i];
       }
   }
   return result
  }
  
  capitalize('hello World');
  capitalize('hello I am Kanishk agrawal');
  