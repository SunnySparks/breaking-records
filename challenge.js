function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let finalScores = [0, 0];
    for(let i = 1; i < scores.length; i++){
        if(scores[i] < min) {
            min = scores[i];
            finalScores[1] = finalScores[1]+1;
        }
        if(scores[i] > max){
            max = scores[i];
            finalScores[0] = finalScores[0]+1;
        }
    }
    if (finalScores[0] === -1){
       finalScores[0] = 1;
    }
    if (finalScores[1] === -1){
        finalScores[1] = 1;
    }
    return finalScores;
}
