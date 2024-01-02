/*
step1
使用P1-3 來做調整

step2
把return取消，並在for loop底下，新增log，讓每一次判斷都可以log出
"*"號

*/

function stars(n) {
    for (var i = '*'; i.length <= n; i = i + '*') {
        console.log(i)
    }
}

stars(10)