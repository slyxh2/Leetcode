/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    const result = [];

    strs.forEach(str => {
        const code = enCode(str);
        map.has(code) ? map.get(code).push(str) : map.set(code, [str]);
    })

    for (const [key, value] of map) {
        result.push(value);
    }

    return result;
};


const enCode = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const j = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if (result[j]) {
            result[j] += 1;
        } else {
            result[j] = 1;
        }
    }

    return result.toString();
}


