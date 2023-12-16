export function checkIsValidCopy(original, copy) {
  return true
}

checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#') // true
checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#') // false (por la p inicial)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
