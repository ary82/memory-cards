// Returns random number between startNum and endNum, both inclusive
export default function rng(startNum, endNum) {
  let num = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
  return num;
}
