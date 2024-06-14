function solution(str){
    let splitString;
    
   if (str.length % 2 == 0) {
     splitString = str.match(/(..?)/g);
   } else {
     splitString = str.match(/(..?)/g);
     let lastElement = splitString.pop() + "_";
     splitString.push(lastElement);
   };
   return splitString || [];
 };