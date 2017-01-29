Array.prototype.selectionSort = function(desc) {
  let A = Object.assign([], this)
  for(let j = 1; j < A.length; j++) {
  let key = A[j]
    let i = j - 1

    while(i >= 0 && (desc ? A[i] < key : A[i] > key)) {
      A[i + 1] = A[i]
      i = i - 1
     }

    A[i + 1] = key
  }
  return A
}

/* -- Usage -- */
let arr = [3, 8, 1, 6, 5, 4, 9, 2, 7]
let ascending = arr.selectionSort() // [1,2,3,4,5,6,7,8,9]
let descending = arr.selectionSort(true) // [9,8,7,6,5,4,3,2,1]