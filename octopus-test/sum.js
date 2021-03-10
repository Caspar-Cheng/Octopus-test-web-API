// numbers = "1,2,3"
const sum = (numbers) => {
    const numArray = numbers.split(",");
    const result = numArray.reduce((accumulate, current) => accumulate + Number(current), 0);
    return String(result);
}

module.exports = sum;