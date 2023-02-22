/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = "";
    const length = strs.length;
    let p1 = 0, p2 = 0; // p1->item p2->array index
    let current = strs[p2][p1];
    let char = current;
    while (current) {
        current = strs[p2][p1];
        if (p2 === 0) char = current;
        if (current !== char || !current) return result;
        if (p2 === length - 1) {
            result += char;
            p1++;
            p2 = 0;
        } else {
            p2++;
        }

    }

    return result;
};