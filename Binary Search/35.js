/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const val = nums[mid];
        if (target > val) {
            l = mid + 1;
        } else if (target < val) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return l;
};