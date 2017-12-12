function isNice(arr) {
    let boo = true
    if (arr.length === 0) {
        boo = false
    }
    for (var i = 0; i < arr.length; i++) {
        let j = arr[i]
        if (!((arr.includes(j - 1) || arr.includes(j + 1)))) {
            boo = false
        }
    }
    return boo
};