const compareNumbers = (userGuess, hiddenNumber) => {
    if ((userGuess > 20) || (userGuess < 1) || (userGuess === typeof(string))){
        return false;
    } else if (userGuess < hiddenNumber){
        return -1;
    } else if (userGuess > hiddenNumber){
        return 1;         
    } else {
        return 0;
    }};

export default compareNumbers;