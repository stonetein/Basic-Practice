/*
    step1 使用判斷大小寫的涵式，測試回傳值為
    true 或 false
    
    step2 從輸入的string 去判斷 字串與取得字
    串第一個單字是相同


 */
var str = 'zBCD'
//var strUp = str[0].toLocaleUpperCase()var 
if (str[0] === str[0].toLocaleUpperCase()) {
    console.log('a:', str[0], 'b:', str[0].toLocaleUpperCase(), 'true')
} else {
    console.log('a:', str[0], 'b:', str[0].toLocaleUpperCase(), 'false')
}

// refactor
function isUpperCase(str) {
    if (str[0] === str[0].toLocaleUpperCase()) {
        return true
    } else {
        return false
    }
}

console.log(isUpperCase("ABCD"))