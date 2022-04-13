//function largestOfFour(arr) {
//    var largest = [];
//
//    for (var i = 0; i < arr.length; i++) {
//
//        largest[i] = arr[i].sort(function (a, b) {
//            return a - b;
//        })[arr[i].length - 1];
//    }
//    console.log(largest);
//}

//function largestOfFour(arr) {
//    let answer = []
//    for (let i = 0; i < arr.length; i++) {
//        answer.push(Math.max(...arr[i]))
//    }
//    console.log(answer);
//}

function largestOfFour(arr) {
    let answer = []
    arr.forEach(function (array) {
        answer.push(Math.max(...array))
    })
    return answer
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);



