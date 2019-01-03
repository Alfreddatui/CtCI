// Zero Matrix: Write an algorith such that if an element in an MxN matrix is 0, its entire row and column are set to 0

function zeroMatrix(mtrx) {
  // after reading the solutions, assuming that we make a boolean array to keep track the rows and cols that have 0, we need to check
  // whether the first col or row have a zero!
  const rows = mtrx.length;
  const cols = mtrx[0].length;

  let rowHasZero = false;
  let colHasZero = false;

  // check first row
  for (let i = 0; i < cols; i++) {
    if (mtrx[0][i] == 0) {
      rowHasZero = true;
      break;
    }
  }
  // check first col
  for (let i = 0; i < rows; i++) {
    if (mtrx[i][0] == 0) {
      colHasZero = true;
      break;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
    	if (mtrx[i][j] == 0) {
        mtrx[0][j] = 0;
        mtrx[i][0] = 0;
	    }
    }
  }


  // change the rows that are zeros
  for (let i = 1; i < rows; i++) {
    if (mtrx[i][0] == 0) {
      mtrx[i] = new Array(cols).fill(0);
    }
  }

  // change the cols that are zeros
  for (let i = 1; i < cols; i++) {
    if (mtrx[0][i] == 0) {
      for (let j = 0; j < rows; j++) {
        mtrx[j][i] = 0;
      }
    }
  }

  if (rowHasZero) {
    mtrx[0] = new Array(cols).fill(0);
  }

  if (colHasZero) {
    for (let j = 0; j < rows; j++) {
      mtrx[j][0] = 0;
    }
  }

  return mtrx;
}

const input = [
  [0, 1, 2, 3, 0],
  [4, 5, 6, 0, 8],
  [8, 9, 10, 11, 12],
  [12, 13, 14, 15, 16],
  [16, 17, 18, 19, 20],
]

console.log(zeroMatrix(input));

