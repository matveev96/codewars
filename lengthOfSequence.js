var lengthOfSequence = function (arr, n) {
    // TODO: Write some scripts here
    
    var indices = [];
    var idx = arr.indexOf(n);
    
    while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(n, idx + 1);
    };
    
    if (indices.length === 2) {
      return indices[indices.length - 1] - indices[0] + 1;
    } else {
      return 0;
    };
  };

  // Best practices

  function lengthOfSequence(arr, n){
    return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
  }
  
  Array.prototype.count = function(n){
    return this.filter(function(v){ return v == n }).length;
  }