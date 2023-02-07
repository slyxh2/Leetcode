// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    const length = s.length;
    let p = 0;
    let result = 0;
    while (p < length) {
        const c1 = obj[s[p]], c2 = obj[s[p + 1]] || 0;
        if (c2 > c1) {
            result -= c1;
        } else {
            result += c1;
        }
        p++;
    }
    return result;
};