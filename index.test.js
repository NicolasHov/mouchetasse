import compile from './index';

describe("compile function", () => {
    test('inject text thierry in a div', () => {
        expect(compile(`<div>{{name}}</div>`, { name: "thierry" })).toBe(`<div>thierry</div>`);
    });
});
