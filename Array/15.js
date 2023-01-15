// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const length = nums.length;
    if (length < 3) return [];
    const ary = nums;
    ary.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1, right = length - 1;
        while (left < right) {
            let sum = ary[i] + ary[left] + ary[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else if (sum === 0) {
                result.push([ary[i], ary[left], ary[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                right--;
                left++;
            }
        }
    }
    return result;
};

