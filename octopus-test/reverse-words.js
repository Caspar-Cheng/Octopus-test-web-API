// sentence = "Hi, Octopus"
const reverseWord = (sentence) => {
    return sentence.replace(/[a-z]+/gi, function(s){return s.split('').reverse().join('')});
}

module.exports = reverseWord;