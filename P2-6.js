/*
step1
框架概念
套用費式公式  fib(n) = fib(n-1) + fib(n-2)
step2
一開始直接用console.log(n === 0 || n === 1 ? fib(n - 1) + fib(n - 2) : n)
發現很奇怪的錯誤，修正為return，再測試

*/
function fib(n) {
    if (n === 0 || n === 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
console.log(fib(8))

