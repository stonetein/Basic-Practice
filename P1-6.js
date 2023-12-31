/*
step1
找遍字串中的字母，找到第一個大寫字母時，印出該值與indexOf
測試後卡住，太過復雜，換方法

step2
做用for loop 找編字符並將str轉換對應的charCode
寫if else 判斷式，該數字是否在字母大寫區間(65 - 90)內
成立，就將數字加入到result清單中

step3
因為我只要取得第一位大寫字母與它的index，分增加2個變數
word，loc進行轉換log

step4
因為使用了string.indexOf涵式，如果未找到則會回傳-1
*/

/*
var str = "AbcD"
for (var i = 0; i <= str.length; i++) {
    var result = []
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        result.push(i)
    }
}
console.log(result)
*/
function position(str) {
    var result = []
    for (var i = 0; i <= str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            result.push(str.charCodeAt(i))
        }
    }
    word = String.fromCharCode(result[0])
    loc = str.indexOf(word)
    console.log(word, loc)
}
position("abcC")