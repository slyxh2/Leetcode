/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = [];
var permute = function (nums) {
    let used = [];
    let track = [];
    backTrack(nums, track, used);
    let res = result;
    result = [];
    return res;
};


const backTrack = (nums, track, used) => {
    if (track.length === nums.length) {
        result.push([...track]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        track.push(nums[i]);
        used[i] = true;
        backTrack(nums, track, used);
        track.pop();
        used[i] = false;
    }
}