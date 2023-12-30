/*
    step1 在JS中，log * 符號會報錯，因為*是運算符號，
    無法直接log，可透過轉成string type來log

    step2因為n變數與string無法直接比較，這邊使用透過
    取得i.length長度來與變數n比較判斷條件

    step3如何讓變str * 可以遞增的方式 var i = '*',i = i + '*' 

    step4目前可以正常印出我要的*數量，但是我們不要每一每都印一次
    把console.log(i)在for loop 往外退一層，結果是我們要的。

    step5 最後一個問題，會log出 underined，最後把log 改為return
    可以解解這個問題。
*/


function star(n) {
    for (var i = '*'; i.length < n; i = i + '*') {

    }
    return i
}

console.log(star(5))