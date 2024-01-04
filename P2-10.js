/*
    step1
    框架概念
    1.以findMin(arr, n)n為跑幾次for的條件
    透過找到array中最小值，再次透過array.splice(min, 1)更新array
    2.因為在取得新的array後，卡住不知如何再跑一次新的array
    上google找到答案，需要在最外層跑一個while加上arr.length >= n的變數條件
    3.驗證後發現，當我輸入n值，都會從array得到最大，所以在調整一次if 判斷
    把arr[i] < min 改為 arr[i] > min，就可以了
    
    step2
    refactor
*/
function findMin(arr, n) {
    while (arr.length >= n) {
        var min = arr[0]
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] > min) {
                min = arr[i]
            }
        }
        arr.splice(arr.indexOf(min), 1)
    }
    console.log(min)
}
findMin([1, 1, 1, 1, 5], 4)