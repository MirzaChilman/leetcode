/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// solve A
// sort it and compare, equal true other false

// solve B
// using Map
// count char freq

// solve C
// using array fill as keeping note
 
var isAnagram = function(s, t) {
    // SOLVE C
    const sFill = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++){
        const letterIndex = s[i].charCodeAt() - 97
        sFill[letterIndex]++
    }

    for(let i = 0; i < t.length; i++){
        const letterIndex = t[i].charCodeAt() - 97
        sFill[letterIndex]--
    }

    return sFill.every(s => s === 0)


    // SOLVE B
    // const sFreq = new Map()
    // const tFreq = new Map()
    // for(let i = 0; i < s.length; i++){
    //     const current = s[i]
    //     sFreq.set(current, (sFreq.get(current) || 0) + 1)
    // }
    // for(let i = 0; i < t.length; i++){
    //     const current = t[i]
    //     tFreq.set(current, (tFreq.get(current) || 0) + 1)
    // }

    // if(sFreq.size !== tFreq.size) return false

    // for(const [key, value] of sFreq.entries()){
    //     if(tFreq.get(key) !== value) return false
    // }

    // return true
    // SOLVE A
    // return s.split('').sort().join('') === t.split('').sort().join('')
};