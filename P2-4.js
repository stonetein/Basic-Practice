/**
 * step1
 * 框架 構想使用函式table(n) result 1*2 = 1
 * n(變數) x 1(固定length 9) = sum(運算結果)
 * 
 * step2
 * 驗證邏輯與功能是否可行，先從一行開始，並log出
 * function table(n) {
    var i = 2
    var sum = n * i
    console.log(n + '*' + i + ' = ' + sum)
}
table(1)
 * 
 * step3
 * 調整code 並加入for loop，實現印出 n*1 ~ n*9 的結果
 * 
 */

function table(n) {
    for (var i = 1; i <= 9; i++) {
        sum = n * i
        console.log(n + '*' + i + ' = ' + sum)
    }
}

table(7)