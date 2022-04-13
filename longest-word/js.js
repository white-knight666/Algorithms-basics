function longestWordLength(str) {
    let lengths = str.split(' ').map(word => word.length)
    console.log(Math.max(...lengths)) 
  }
longestWordLength("May the force be with you")