const palindromes = function (words) {
    let reverseWord;
    const rule = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanString = words.toLowerCase().split('').filter((words) => rule.includes(words)).join('');
    reverseWord = cleanString.split('').reverse().join('');
    if (reverseWord === cleanString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
