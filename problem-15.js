/*  Starting in the top left corner of a 2×2 grid, and only being able to move
    to the right and down, there are exactly 6 routes to the bottom right corner.
 */



function buildPascal(n) {
  var triangle = []
  for(var i=0; i<n; i++){
    var thisRow = []
    if (i===0) {
      triangle.push([1])
      continue
    }
    if (i===1) {
      triangle.push([1,1])
      continue
    }
    var prevRow = triangle[triangle.length-1]
    thisRow.push(1)
    for(var j=0; j<prevRow.length-1; j++){
      var num1 = prevRow[j];
      var num2 = prevRow[j+1];
      thisRow.push(num1+num2)
    }
    thisRow.push(1)
    triangle.push(thisRow)
  }
  return triangle
}

function countRoutes(int) {
  var triangle = buildPascal(int*2+1)
  var lastRow = triangle[triangle.length-1]
  var midpoint = Math.floor(lastRow.length/2)
  console.log(lastRow[midpoint])
  return lastRow[midpoint]
}

countRoutes(20)
