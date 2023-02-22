/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];
    for (let i = 0; i < len; i++) {
        const current = s[i];
        if (map[current]) {
            stack.push(current);
        } else {
            if (map[stack.pop()] !== current) return false;
        }
    }
    return stack.length === 0;
};