// 704. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let length = nums.length;
    if (!length) return -1;
    let left = 0, right = length - 1;
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        const val = nums[mid];
        if (val === target) {
            return mid;
        } else if (val > target) {
            right = mid - 1;
        } else if (val < target) {
            left = mid + 1;
        }
    }
    return -1;
};



