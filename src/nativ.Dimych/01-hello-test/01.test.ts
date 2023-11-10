import {mult, splintIntoWords, sum} from "./01";
let a = 1;
let b = 2;
let c = 3;


beforeEach  ( () => {
     a = 1;
     b = 2;
     c = 3;
})
test('sum should be correct', () => {


    //action
    let result = sum(a, b);
    //expert result

    expect(result).toBe(3);
})

// test.skip('sum should be correct', () => {
//     //action
//     let result1 = sum(a, b);
//     let result2 = sum(b, c);
//     //expert result
//
//     expect(result1).toBe(3);
//     expect(result2).toBe(5);
// })


test('multiply should be correct', () => {

    //action
    let result1 = mult(a, b);
    let result2 = mult(b, c);
    //expert result

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into words should be correct', () => {
    //data
    let sent1 = "Hello my friends!"
    let sent2 = "Js the best programming language."

        //action
    let result1 = splintIntoWords(sent1);
    let result2 = splintIntoWords(sent2);
    //expert result


    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");


    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})