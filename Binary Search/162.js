// 162. Find Peak Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    const length = nums.length;
    if (!length) return null;
    let left = 0, right = length - 1;
    while (left < right) {
        const mid = parseInt(left + (right - left) / 2);
        const val = nums[mid],
            leftVal = nums[mid - 1] || val - 1,
            rightVal = nums[mid + 1] || val - 1;
        if (val > leftVal && val > rightVal) {
            return mid;
        } else if (leftVal >= rightVal) {
            right = mid - 1;
        } else if (leftVal < rightVal) {
            left = mid + 1;
        }

    }
    if (left === right) return left;
};