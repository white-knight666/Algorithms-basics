
function factorialize(n) {
    if (n == 0) 
        return 1;
    else if (n == 1) 
        return n;
        else {
          return (n * factorialize(n - 1));
}
}

console.log(factorialize(6));