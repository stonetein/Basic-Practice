/*
    step1
    框架概念
    進行array 的位置大小比較 例 0 1 2 3
    1 > 0 ...就交換位置 預期得到 3 2 1 0
    但在想的過程中想到更快的方式，直接由大到小順序加入空清單
    3, 2, 1, 0
    再用array.join('') log出字串

    step2
    refactor

    因為之前在做P2-2練習一直回傳不了array.join('')現在搞懂了，可以
    再回去修正~太棒了~耶...


*/

function reverse(str) {
    result = []
    for (var i = str.length - 1; i >= 0; i -= 1) {
        result.push(str[i])
    }
    return result.join('')


}
console.log(reverse("12345aa"))