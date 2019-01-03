// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image
// by 90 degrees. Can you do this in place?

function rotate90(mtrx) {
  const ln = mtrx.length;
  let temp;
  for (let i = 0; i < ln; i++) {
    for (let j = i; j < ln; j++) {
      temp = mtrx[i][j];
      mtrx[i][j] = mtrx[j][i];
      mtrx[j][i] = temp;
    }
  }
  for (let i = 0; i < ln; i++) {
    mtrx[i].reverse();
  }
  return mtrx;
}

const input = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];

const input1 = [
  [0, 1, 2, 3, 4],
  [4, 5, 6, 7, 8],
  [8, 9, 10, 11, 12],
  [12, 13, 14, 15, 16],
  [16, 17, 18, 19, 20],
]

const input2 = [
  [1, 2],
  [3, 4]
];

console.log(rotate90(input1));
// THE BOOK HAVE DIFFERENT SOLUTION