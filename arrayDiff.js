function arrayDiff(a, b) {
    a = a.filter(i => !b.includes(i));
    return a;
  };