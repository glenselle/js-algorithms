function binaryAdd(A, B) {
  let C = []
  let carry = 0
  
  for(let i = A.length - 1; i >= 0; i--) {
    let s = A[i] + B[i] + carry
    C[i + 1] = s % 2
    carry = s > 1 ? 1 : 0
  }
  C[0] = carry

  return C
}

let num1 = [0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
let num2 = [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]
//      [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1] 

let result = binaryAdd(num1, num2) // [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1]
