let { firstName, fullName } = require('../../integration')

describe('they must be functions', () => {
    test("firstName and fullName to be functions", () => {
        expect(typeof firstName).toBe('function');
        expect(typeof fullName).toBe('function');
    })
})

describe('Not to be undefined', () => {
    test("firstName and fullName not toBe undefined", () => {
        expect(typeof firstName).not.toBeUndefined();
        expect(typeof fullName).not.toBeUndefined();
    });

    test('Data type of firstName and fullName toBe string', () => {
        let fname = firstName();
        let full_name = fullName();

        expect(typeof fname).toBe('string')
        expect(typeof full_name).toBe('string')
    })
})

describe("Integration to test", ()=> {

    test("Full Name toBe at least two names", () => {
        let fname = firstName('David');
        // fname = ""

        let full_name  = fullName(fname, 'Wampamba');
        //'David Wampamba'

        let nameChunks = full_name.split(' ')
        // nameChunks[0] = 'David'
        // nameChunks[1] = 'Wampamba'

        expect(nameChunks.length).toBeGreaterThan(1);
        expect(nameChunks[1]).not.toBe('');
        expect(nameChunks[0]).not.toBe('');
    })
})