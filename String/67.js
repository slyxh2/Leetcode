/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = [];
    let i = a.length - 1, j = b.length - 1;
    let carrier = 0;
    while (i >= 0 || j >= 0) {
        let sum = 0;
        if (i >= 0) {
            sum += Number(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += Number(b[j]);
            j--;
        }
        if (carrier > 0) {
            sum += carrier;
            carrier = 0;
        }
        if (sum > 1) carrier = 1;
        result.push(sum % 2);
    }
    if (carrier > 0) result.push(carrier);
    return result.reverse().reduce((prev, curr) => prev + curr, '');
};