// const compareNumbers = (userGuess, hiddenNumber) => {
//     if (userGuess > hiddenNumber){
//         return 1;
//     } else if (userGuess < hiddenNumber){
//         return -1;
//     } else if (userGuess === hiddenNumber){
//         return 0; 
//     } else if (userGuess > 20 || userGuess < 1 || userGuess === 'e' || userGuess === 'E'){
//         return false;
//     }};

const compareNumbers = (userGuess, hiddenNumber) => {
    if (userGuess > 20 || userGuess < 1 || userGuess === 'e' || userGuess === 'E'){
        return false;
    } else if (userGuess < hiddenNumber){
        return -1;
    } else if (userGuess > hiddenNumber){
        return 1;         
    } else {
        return 0;
    }};

export default compareNumbers;