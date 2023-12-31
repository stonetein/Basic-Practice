/*
 step1
 框架

 step2
 對陣列使用for loop 與 if else 對arr的每個數字與n
 進行比大小如果比n小就加到result清單

 step3
 最後計算result的長度，取得答案
 */



function findSmailCount(arr, n) {
    var result = []
    for (var i = 1; i <= arr.length; i++) {
        if (n > i) {
            result.push(i)
        }
    }
    console.log(result.length)
}
findSmailCount([1, 2, 3, 4, 5], 0)
