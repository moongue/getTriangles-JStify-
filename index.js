const getTriangleP = (a, b) => {
  const cos120 = -0.5;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * cos120) + a + b;
}

const getTriangles = (maxP) => {
  const minimalPossibleMaxP = 15;

  if (maxP < minimalPossibleMaxP) return 0;
  if (maxP === minimalPossibleMaxP) return 1;

  const startPoint = 4;                     // minimal size of side triangle that starts from perimeter 15
  const endPoint = Math.ceil(maxP / 2);  // size of big side triangle cannot be more than half perimeter
  let count = 1;                            // count start from 1 because for maxP that equal 15 or more exist at least one triangle

  for (let a = startPoint; a !== endPoint; a += 1) {
    for (let b = a + 1; b !== endPoint; b += 1) {
      const triangleP = getTriangleP(a, b);

      if (Number.isInteger(triangleP) && triangleP <= maxP) {
        count += 1;
        break;                             // for 'a' can exist only one 'b'
      }
    }
  }

  return count;
};
