import sum from "../src/sum";


describe('sum function', ()=>{
    test('sum values ', () => {
        const input = sum(3,5);
        const output = 8;
    
        expect(input).toEqual(output);
    })
    
});