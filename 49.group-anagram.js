/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if(strs.length === 0) return []
  const anagramMap = new Map()
  for(let s of strs){
      let arrayLetters = s.split('')
      arrayLetters.sort()
      let arrayKey = arrayLetters.join('')
      if(!anagramMap.has(arrayKey)) anagramMap.set(arrayKey, [])
      anagramMap.get(arrayKey).push(s)

  }
  return Array.from(anagramMap.values())
};