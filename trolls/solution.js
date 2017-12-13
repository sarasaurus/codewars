function disemvowel(str) {
    let result = str.replace(/[aeiouAEIOU]/g, '');
    return result;
}