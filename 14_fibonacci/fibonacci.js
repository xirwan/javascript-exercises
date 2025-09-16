const fibonacci = function(number) {
    let first = 1;
    let before = 0;
    let position;

    if (number == 0){
        return 0;
    } else if (number < 0){
        return "OOPS";
    } else if (number == 1){
        return 1;
    }

    for(i = 0; i < number-1 ; i++){
        position = first + before;
        before = first;
        first = position;
    }
    
    return position;
};

// Do not edit below this line
module.exports = fibonacci;
