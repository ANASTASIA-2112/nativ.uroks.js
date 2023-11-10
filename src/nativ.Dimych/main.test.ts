// Очень просто, учитывая целое число или число с плавающей запятой,
// найдите его противоположность.
// Свойство нуля при вычитании Если из числа вычесть нуль,
// получится само число. a — 0 = a
// Если из числа вычесть само число, то получится нуль. a — a = 0.
export function opposite(number: any) {
    return number = 0 - number //1 способ
    //return(-number);//2способ

}


it('Is it a function?', () => {
    let sites = opposite('opposite should be a function');

});
it('should return -1', () => {
    expect(opposite(1)).toBe(-1);
});
it('should return 0', () => {
    expect(opposite(0)).toBe(0);
});
it('should return -4.25', () => {
    expect(opposite(4.25)).toBe(-4.25);
});
it('should return -3.3333333', () => {
    expect(opposite(3.3333333)).toBe(-3.3333333);
});
it('should return 12525220.3325', () => {
    expect(opposite(-12525220.3325)).toBe(12525220.3325);
});
it('should return 5', () => {
    expect(opposite(-5)).toBe(5);
});

