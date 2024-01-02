/*
step1
框架

step2
找出n值輸出的總合定律是n * 2 - 1可以符合
使用輸入後可印出length，假如n是5，5 *2-1
=9，log出123456789

step3
找出另一個log出6789轉為4321的公式當使者輸入5
5一定套用n * 2 - i
5 * 2 - 6 = 4
5 * 2 - 7 = 3
5 * 2 - 8 = 2
5 * 2 - 9 = 1

step4
使用String repeat()涵式，將算出的使套入轉換為字符'*'
*/

function stars2(n) {
    for (var i = 1; i <= n * 2 - 1; i++) {
        var star = '*'
        console.log(i <= n ? star.repeat(i) : star.repeat(n * 2 - i))
    }
}

stars2(5)