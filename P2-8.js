/*
    step1
    框架概念
    透過英文大小寫的函式charCodeAt()用三元運算判斷回傳ture 或 false

    step2
    驗證功能，是否一與概念相同
    這次log出的value 使用 string + 回到空的string，就可以省一步用
    Array.join()
*/
function swap(str) {
    var result = ''
    for (var i = 0; i <= str.length; i++) {
        if (str.charCodeAt(i) < 96) {
            result += str[i].toLowerCase()
        } else if (str.charCodeAt(i) > 90) {
            result += str[i].toUpperCase()
        }
    }
    return result
}
console.log(swap("Peter"))