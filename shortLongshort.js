function solution(a, b){
    // your code here
    if (a.length > b.length) {
      return b+a+b;
    } else {
      return a + b + a;
    }
  }