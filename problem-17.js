/*  If the numbers 1 to 5 are written out in words: one, two, three, four, five,
    then there are 3 + 3 + 5 + 4 + 4 = 19  letters used in total.
    If all the numbers from 1 to 1000 (one thousand) inclusive were written out
    in words, how many letters would be used?
 */

// Limited at 1000
function spokenNumSub999(int) {
    const low = [
      'zero','one','two','three','four','five','six','seven','eight','nine',
      'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','eighteen','nineteen',
    ]
    const tens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let intArr = int.toString().split('').map(d => Number(d))
    if (intArr.length > 2 && intArr[intArr.length-2] === 1) {
      intArr[intArr.length-1] = Number(intArr[intArr.length-2].toString()+intArr.pop())
      intArr[intArr.length-2] = null
    }
    let spoken = ''
    intArr.forEach(digit => )
    console.log(intArr)
}


spokenNumSub999(315)
