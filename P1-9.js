/*
 step1
 框架

 step2
 對陣列使用for loop 與 if else 對arr的每個數字與n
 進行比大小如果比n小就加到result清單

 step3
 最後對log出result
 */

function findAllSmall(arr, n) {
    var result = []
    for (var i = 0; i <= arr.length; i++) {
        if (n > arr[i]) {
            result.push(arr[i])
        }
    }
    console.log(result)
}
findAllSmall([1, 3, 5, 4, 2], 3)