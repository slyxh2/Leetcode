// 34. Find First and Last Position of Element in Sorted Array


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)];
};

const searchLeft = (nums, target) => {
    const length = nums.length;
    if (!length) return -1;
    let left = 0, right = length - 1;
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2);
        const val = nums[mid];
        if (val === target) right = mid - 1;
        else if (val > target) right = mid - 1;
        else if (val < target) left = mid + 1;
    }
    if (nums[left] !== target) return -1;
    return left;
};

const searchRight = (nums, target) => {
    const length = nums.length;
    if (!length) return -1;
    let left = 0, right = length - 1;
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2);
        const val = nums[mid];
        if (val === target) left = mid + 1;
        else if (val > target) right = mid - 1;
        else if (val < target) left = mid + 1;
    }
    if (nums[right] !== target) return -1;
    return right;
};