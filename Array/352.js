// 352. Data Stream as Disjoint Intervals

var SummaryRanges = function () {
    // this.arr = [];
    this.set = new Set();
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
    this.set.add(value);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
    const arr = Array.from(this.set).sort((a, b) => a - b);
    const length = arr.length;
    if (length === 0) return [[null, null]];
    let result = [];
    let left = -1, right = -1;
    arr.forEach(current => {
        if (left < 0) {
            left = right = current;
        } else if (current === right + 1) {
            right = current;
        } else {
            result.push([left, right]);
            left = right = current;
        }
    });
    result.push([left, right]);
    return result;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */