const compareNumbers = (userGuess, hiddenNumber) => {
    if (userGuess > hiddenNumber){
        return 1;
    } else if (userGuess < hiddenNumber){
        return -1;
    } else return 0; 
};

export default compareNumbers;