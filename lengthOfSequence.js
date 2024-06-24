var lengthOfSequence = function (arr, n) {
    // TODO: Write some scripts here
    
    var indices = [];
    var idx = arr.indexOf(n);
    
    while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(n, idx + 1);
    };
    
  //   console.log(indices);
    
    if (indices.length === 2) {
      return indices[indices.length - 1] - indices[0] + 1;
    } else {
      return 0;
    };
  };