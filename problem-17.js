/*  If the numbers 1 to 5 are written out in words: one, two, three, four, five,
    then there are 3 + 3 + 5 + 4 + 4 = 19  letters used in total.
    If all the numbers from 1 to 1000 (one thousand) inclusive were written out
    in words, how many letters would be used?
 */

 function spokenNum(int) {
   const suffixes = [null, 'thousand', 'million', 'billion']
   let intArr = int.toString().split(/(?=(?:...)*$)/).map( e => Number(e))
   let spoken = '';
   for(let i=intArr.length-1, suf=0; i>=0; i--, suf++){
     let suffix = suf ? suffixes[suf]:'';
     spoken = spokenNumSub999(intArr[i]) + ' ' + suffix + ' ' + spoken;
   }
   return spoken
 }

// Limited at 1000
function spokenNumSub999(int) {
    if(int === 000) return ''
    const low = [
      'zero','one','two','three','four','five','six','seven','eight','nine',
      'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'
    ]
    const tens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let intArr = int.toString().split('').map(d => Number(d))
    if (intArr.length >= 2 && intArr[intArr.length-2] === 1) {
      intArr[intArr.length-1] = Number(intArr[intArr.length-2].toString()+intArr.pop())
      intArr[intArr.length-2] = null
    }
    while(intArr.length < 3) intArr.unshift(null)
    console.log('intArr: ', intArr)
    let spoken = '';
    // Hundreds digit
    if(intArr[0]) spoken += low[intArr[0]] + ' hundred'
    // Tens digit, for values >= 20
    if(intArr[0] && (intArr[1] || intArr[2])) spoken += ' and '
    if(intArr[1]) spoken += tens[intArr[1]]
    // Ones digit and teens
    if(intArr[1] && intArr[2]) spoken += '-'
    spoken += intArr[2] ? low[intArr[2]]:'';

    return spoken
}

// Concats all spoken numbers under integer argument, inclusive
function concatSpoken(int){
  let spoken = ''
  while(int) {
    spoken += spokenNum(int)
    int--
  }
  return spoken
}

function countLetters(int){
  return concatSpoken(int).match(/[A-Za-z]/g).length
}

console.log(spokenNum(19))
