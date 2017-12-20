
function high(x) {

    let word = '';
    let tally = 0;
    const splitArr = x.split(' ');

    for (var i = 0; i < splitArr.length; i++) {
        let wordScore = 0;
        for (var j = 0; j < splitArr[i].length; j++) {
            wordScore += splitArr[i].charCodeAt(j) - 96;
        }
        if (wordScore > tally) {
            tally = wordScore;
            word = splitArr[i];
        }
    }
     return word;
}