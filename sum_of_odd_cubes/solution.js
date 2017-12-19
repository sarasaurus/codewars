function cubeOdd(arr) {
    const cube = arr.map(ele => Math.pow(ele, 3));
    const typeArr = arr.map(ele => typeof ele);
    if (typeArr.includes("string")) {
        return undefined
    } else {
        return cube.filter(ele => ele % 2 !== 0).reduce((a, b) => a + b);
    }

}