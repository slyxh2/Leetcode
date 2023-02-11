
// 202. Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set();
    while (!set.has(n)) {
        set.add(n);
        let str = n + '';
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Math.pow(Number(str[i]), 2);
        }
        if (sum === 1) return true;
        n = sum;
    }
    return false;
};