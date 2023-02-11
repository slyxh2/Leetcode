// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    const length = nums.length;
    const major = length / 2;
    for (let i = 0; i < length; i++) {
        const current = nums[i];
        const currentCount = map.get(current) || 0;
        if (currentCount + 1 > major) return current;
        map.set(current, currentCount + 1);
    }
};