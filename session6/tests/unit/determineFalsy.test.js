const getCheck  = require('../../determineFalsy')
// let faleValue = require ('../../sumOfNumbers')



    test('Determining null of falseValue', () =>{
        expect(getCheck()).not.toBeNull()
    });
   

    test('Determining if underfined is a falsy value', () =>{
        expect(getCheck(undefined)).toBe(true);
    });

    test('Determining if value is NaN of falseValue', () =>{
        expect(getCheck(NaN)).toBe(true)
    });
 
    test('Determining 0 of falseValue', () =>{
        expect(getCheck(0)).toBe(true)
    });

    test('Determining if empty string is a falsy value', () =>{
        expect(getCheck("")).toBe(true)
    });