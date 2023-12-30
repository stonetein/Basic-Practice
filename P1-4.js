/*
    試不出可以同時執行star(5) 與 console.log(star(5))，都只log出*****，卡關@@
    參考了同學後，問題就是出在for loop 的回傳，有恍然大悟~感謝同學
*/


function star(n) {
    for (var i = '*'; i.length < n; i = i + '*') {
        return i = i + '*'
    }
    return i
}

star(5)
console.log(star(5))