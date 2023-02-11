// 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const sMap = new Map(), tMap = new Map();
    const length = s.length;
    for (let i = 0; i < length; i++) {
        const currentS = s[i], currentT = t[i];
        if (!sMap.get(currentS)) {
            sMap.set(currentS, currentT);
        }
        if (!tMap.get(currentT)) {
            tMap.set(currentT, currentS);
        }

        if (tMap.get(currentT) !== currentS || sMap.get(currentS) !== currentT) return false;
    }
    return true;
};