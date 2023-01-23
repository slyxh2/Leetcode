// 658. Find K Closest Elements
// first try solution
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let left = 0, right = k - 1;
    let gap = 0;
    for (let i = 0; i < k; i++) {
        gap += Math.abs(arr[i] - x);
    };

    let l = 0;
    for (let h = right + 1; h < arr.length; h++) {
        const currentGap = gap - Math.abs(arr[l] - x) + Math.abs(arr[h] - x);
        l++;
        if (currentGap < gap) {
            left = l;
            right = h;
        }
    }

    return arr.slice(left, right + 1);

};

//  improvement
