function cubeOdd(arr) {
    const first = arr.map(ele => Math.pow(ele, 3));
    console.log(first, 'arr cubed!');
    const typeArr = arr.map(ele => typeof ele);
    console.log(typeArr, 'what type!');
    if (typeArr.includes("string")) {
        return "undefined"
    } else {
        return first.filter(ele => ele % 2 !== 0).reduce((a, b) => a + b);
    }

}