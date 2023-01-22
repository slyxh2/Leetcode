// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const length = nums.length;
    if (!length) return -1;
    let left = 0, right = length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = nums[mid];
        if (val < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    };
    if (target > nums[length - 1]) {
        left = 0;
    } else {
        right = length - 1;
    }

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = nums[mid];
        if (target === val) return mid;
        else if (target < val) right = mid - 1;
        else if (target > val) left = mid + 1;
    }

    return nums[left] === target ? left : -1;


};