/*
 step1
 框架

 step2
 對陣列使用for loop 對arr的每個數字
 進行相++ 並 +=sum

 step3
 最後對log出total
 */

function sum(arr) {
    var total = 0
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
console.log(sum([-1, 1, 2, -2, 3, -3]))