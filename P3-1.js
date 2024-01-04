/*
    step1
    框架概念
    1.使用for loop 指定arr宣告 min = arr中第一個值為最小
    進行比較if min > arr[i] ，min = arr[i]
    結速for loop 把最小值min加到新的minList中
    這裡一樣因為跑完就不跑了，必需在給個wile loop在最外層給條件
    arr.length >= 1，因為當arr中的參數全部比較完時arr.length = 0
    所以這時就會跳出While loop
    2.
    驗證功能
    一直卡在為什麼只加完第一個minList.push(min) = [2]，後面就沒有東西
    最後透過chrome 的debugger 功能，才發現問題出現var minsList 這個宣告
    會因為while跑第2次時就會reset ，必預移到function 底下，debugger成功。
    3.
    step2
    refactor
*/
function sort(arr) {
    var minList = []
    while (arr.length >= 1) {
        var min = arr[0]
        for (var i = 1; i <= arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i]
            }
        }
        minList.push(min)
        arr.splice(arr.indexOf(min), 1)
    }
    console.log(minList)
}
sort([1, 2, 7, 5, 11, 22, 1, 221, -22, 2, 1, 3, 5, 2, 43, 2, -1, -10,])