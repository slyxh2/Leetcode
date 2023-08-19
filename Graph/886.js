/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    let memo = new Array(n).fill(false);
    let record = new Array(n).fill(true);
    let graph = buildGraph(n, dislikes);
    let ok = true;
    for (let i = 0; i < n; i++) {
        traverse(i);
    }
    return ok;
    function traverse(s) {
        if (memo[s] || !ok) return;
        memo[s] = true;
        for (let i = 0; i < graph[s].length; i++) {
            let curr = graph[s][i];
            if (memo[curr]) {
                if (record[curr] === record[s]) {
                    ok = false;
                    return;
                }
            } else {
                record[curr] = !record[s];
                traverse(curr);
            }

        }
    }
};

const buildGraph = (n, dislikes) => {
    let graph = new Array(n).fill().map(() => []);
    dislikes.forEach((item) => {
        graph[item[0] - 1].push(item[1] - 1);
        graph[item[1] - 1].push(item[0] - 1);
    })
    return graph;
}
