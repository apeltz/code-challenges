/*  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
    What is the sum of the digits of the number 2^1000?
 */


function powerOf(int, power) {
    return power === 0 ? 1 : int * powerOf(int, --power);
}

function sumPowerDigits(int, power, productArr = []) {
    // Edge case for integer^0 or integer^1
    if (!power || power === 1 && !productArr.length) return power ? int : 1;
    // Populate initial big-endian array of digits
    if (!productArr.length) {
        (int * int).toString().split('').forEach(digit => productArr.push(Number(digit)))
        power -= 2;
    }

    else {
      let carryover = 0;
        for (var i = productArr.length - 1; i >= 0; i--) {
            let newCarryover = Math.floor((productArr[i] * int + carryover) / 10)
            productArr[i] = (productArr[i] * int + carryover) % 10
            carryover = newCarryover;
            if (!i && carryover) productArr.unshift(carryover);
        }
        power--
    }

    /*  Once multiplication has happened n times and array of digits
        represents final product, sum all digits...
     */
    if (!power) return productArr.reduce((a, b) => a + b)
    // ...otherwise, perform next multiplication on array of digits
    return sumPowerDigits(int, power, productArr)
}

console.log(sumPowerDigits(2, 1000));
