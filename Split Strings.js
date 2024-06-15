//сырое решение
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

 //классное решение
 function solution(str) {
  str.length % 2 && (str += "_");
  return str.match(/.{1,2}/g) || [];
};

//мое отрефакторинговое решение
function solution(str){
  str.length % 2 ? (str+="_"): str;
  return str.match(/(..?)/g) || [];
};