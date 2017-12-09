function capitalize(s) {
    let cap = s.toUpperCase();
    let low = s.toLowerCase();
    let arrLow = low.split('');
    let arrCap = cap.split('');
    let firstArr = [];
    let secondArr = [];

    for (var i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            firstArr.push(arrLow[i]);
        } else {
            firstArr.push(arrCap[i]);
        }
    }

    for (var i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            secondArr.push(arrCap[i]);
        } else {
            secondArr.push(arrLow[i]);
        }
    }
    return [firstArr.join(''), secondArr.join('')]

};
