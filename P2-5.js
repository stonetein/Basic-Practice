/*
    step1
    框架 構想使用函式table9to9()  result 1*1 = 1
    i(1-9) x 1(length 9 * 9= 81) = sum(運算結果)
  
    step2
    證邏輯與功能是否可行，並log出1
    1*1 = 1 ....1*81 = 81 ~....太復雜換，還要換算1-9
    重覆log9次的公式。
    再次驗證透過double for loop 實現兩個值相乘log出
    1 1
    1 2
    ....
    5 1
    5 2
    ...
    9 1
    9 2
 
    step3
    調整code ，實現log出 1*1 =1  ~ 9*9 = 81 的結果
    加上sum(i * n) 與字符*與最終輸出
    i + '*' + n + ' = ' + i * n
 
 */

function table9to9() {
    for (var i = 1; i <= 9; i++) {
        for (var n = 1; n <= 9; n++) {
            console.log(i + '*' + n + ' = ' + i * n)
        }
    }
}

table9to9()