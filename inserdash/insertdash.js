let num = 1003567;


function insertDash(num) {
    let numArray = [];
    let oddArray = [];
    let finalArr = [];

    let n = num.toString();
    numArray = n.split('');
    
    numArray.forEach(function (ele) {
        let isOdd = ele % 2;
        oddArray.push(isOdd);
    })
    for (var i = 1; i < numArray.length; i++) {
        finalArr.push(numArray[i - 1]);
        if (oddArray[i - 1] === oddArray[i] && oddArray[i] !== 0) {
            finalArr.push('-');
        }
    }
    finalArr.push(numArray[i - 1]);
    return finalArr.join('');
}

insertDash(num);
