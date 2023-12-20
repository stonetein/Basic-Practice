function add(a, b) {
    return a + b + 20;
}

// add test of branch

describe('test測試一', function () {
    it('5+10應該等於15', function () {
        expect(add(5, 10)).toEqual(15)
    })

    it('5+12應該等於17', function () {
        expect(add(5, 12)).toEqual(17)
    })

    it('15+20應該等於35', function () {
        expect(add(15, 20)).toEqual(35)
    })

})