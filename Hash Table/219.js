// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        if (map[num] === undefined) {
            map[num] = i;
        } else {
            if (i - map[num] <= k) return true;
            map[num] = i;
        }
    }
    return false;
};