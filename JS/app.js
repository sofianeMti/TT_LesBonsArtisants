function getShortMessage(array) {

    const result = array.filter(array => array.length > 50);
    return result;
}
console.log(getShortMessage());