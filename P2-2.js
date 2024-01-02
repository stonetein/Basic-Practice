/*
使用P1-3 來做調整

step1
框架

step2
先確保用for loop可以印出n的*沒問題

step3
在每一次印完*之後在前面加上\\n字符，最後使用
join('')合拼陣列中的各個字符，在由slice(2)取得字符，省去前面的\n

*/

function star(n) {
    var result = []
    for (var i = '*'; i.length <= n; i = i + '*') {
        result.push('\\n' + i)
    }
    return result.join('').slice(2)
}

console.log(star(2))