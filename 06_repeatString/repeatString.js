const repeatString = function(string, num) {
    let words = "";
    if (num < 0) return "ERROR";
    for (i = 0; i < num; i++){
        words += string;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
