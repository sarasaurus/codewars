function abbrevName(name) {
    let first = name.split(' ').slice(0, -1).join(' ');
    let last = name.split(' ').slice(-1).join(' ');
    let firstname = first.split('');
    let lastname = last.split('');

    return `${firstname[0].toUpperCase()}.${lastname[0].toUpperCase()}`
}