const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }
    let finalSum = 0;
    if (start > end){
        for (i = end; i <= start; i++){
            finalSum += i;
        }
        return finalSum;
    }
    for (i = start; i <= end; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
