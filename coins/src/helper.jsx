function choice(arr) {
  let randomIndx = Math.floor(Math.random() * arr.length);
  return arr[randomIndx];
}
export { choice };
