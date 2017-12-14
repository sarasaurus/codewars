function formatWords(words) {
    if (words === null) { return '' }
    const newArray = words.filter(ele => ele !== '');
    if (words.length === 0) {
        return '';
    } else if (words.length === 1) {
        return words.join('');
    } else if (newArray.length === 1) {
        return newArray.join('');
    } else {
        let popped = newArray.pop();
        let first = newArray.join(', ');
        let newString = `${first} and ${popped}`;
        return newString;
    }
}