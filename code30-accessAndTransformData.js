// Access Objects and transform data

const examResults = {
  Greg: {
    Biology: [90, 75, 23, 60],
    Maths: [100, 80, 30, 45]
  },
  Sarah: {
    Biology: [70, 65, 80, 95],
    Maths: [80, 77, 64, 90]
  },
  Thomas: {
    Biology: [40, 60, 75, 98],
    Maths: [36, 50, 67, 82]
  }
}

// How much Greg scored in their first Biology exam.
console.log(
  examResults.Greg.Biology[0]
)

// How much Sarah scored in their last Maths exam.
// Last element
console.log(
  examResults.Sarah.Maths.slice(-1)[0]
)

// The highest score Thomas achieved in Maths throughout the year.
// highest score Thomas
const hightestNumber = (a,b) => {
  return Math.max(a,b)
}

console.log(
  examResults.Thomas.Maths.reduce(hightestNumber)
)

// The quarter that Greg achieved his lowest score in Biology in the year.
const lowestNumber = (a,b) => {
  return Math.min(a,b)
}

console.log(
  examResults.Greg.Biology.reduce(lowestNumber)
)

// Extension:
// The average of Sarah's scores in Maths for the whole year.

const sum = examResults.Sarah.Maths.reduce((a, b) => a + b, 0);
const avgSarahMathsScore = (sum / examResults.Sarah.Maths.length) || 0;

console.log(avgSarahMathsScore)

