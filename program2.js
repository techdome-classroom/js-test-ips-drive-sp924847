
function longestSubstring(s) {
    let maximumLen = 0;
    let left = 0;
    const charIndexMap = new Map();  

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

         
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
            left = charIndexMap.get(currentChar) + 1;
        }

         charIndexMap.set(currentChar, right);

         maximumLen = Math.max(maximumLen, right - left + 1);
    }

    return maximumLen;
}


module.exports = { longestSubstring };
