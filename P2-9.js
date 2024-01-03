/*
    step1
    框架概念
    1.透過英文大小寫的函式charCodeAt()用三元運算判斷回傳ture 或 false--不行
    2.透過99乘法概念，dobule for loop 每個數字都跑一次---判斷式太多--最後卡關
    3.上網找相關資料，先假設min arrar[0]第一個值 為最小，使用for loop 跑一次array.length
    如果arr[i] < min，就更新min值最後log出最小值

    step2
    驗證功能，是否一與概念相同
   
*/

function findMin(arr) {
    var min = arr[0]
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min)
}
findMin([-1, 2, 5, 6, 99, 4, -10])