function validatePIN(pin) {
    let testpin = /^[0-9]{4}$/.test(pin) || /^[0-9]{6}$/.test(pin);
    return testpin;
}