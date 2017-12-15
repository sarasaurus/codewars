function solution(str) {
    let arr = str.split('');
    let revArr = [];
    for (i = arr.length; i > -1; i--) {
        revArr.push(arr[i]);
    }
    return revArr.join('');
}