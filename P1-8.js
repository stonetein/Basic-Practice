/*
 step1
 框架

 step2
 對陣列使用for loop 與 if else 對arr的每個數字與n
 進行比大小如果比n小就加到result清單

 step3
 最後對result使用 for loop 相加得到sum總和
 */



function findSmailCount(arr, n) {
    var result = []
    for (var i = 0; i <= arr.length; i++) {
        if (n > arr[i]) {
            result.push(arr[i])
        }
    }
    var sum = 0
    for (var i = 0; i < result.length; i++) {
        sum += result[i]
    }
    console.log(sum)
}
findSmailCount([3, 2, 5, 8, 7], 999)
