// function Compare(arr1, arr2) {
//   let count = 0;
//   const clonearr1 = [...arr1];
//   const clonearr2 = [...arr2];
//   for (let i = 0; i < clonearr2.length - 1; i++) {
//     for (let j = 0; j < clonearr1.length - 1; j++) {
//       if (clonearr1[j] === clonearr2[i]) {
//         count += 1;
//         clonearr1[j] = 0;
//         clonearr2[i] = 0;
//         console.log(clonearr1);
//         console.log(clonearr2);
//         console.log(count);
//       }
//     }
//   }

//   if (count >= 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export default Compare;

function Compare(arr1, arr2) {
  let count = 0;
  const clonearr1 = [...arr1];
  const clonearr2 = [...arr2];
  let cache = {};
  //checking frequency of arr1(match item)
  for (let i = 0; i < clonearr1.length; i++) {
    if (!cache[clonearr1[i]]) {
      cache[clonearr1[i]] = 1;
    } else {
      cache[clonearr1[i]]++;
    }
  }
  for (let j = 0; j < clonearr2.length; j++) {
    if (cache[clonearr2[j]]) {
      count++;
      cache[clonearr2[j]]--;
    }
  }

  return count >= 3 ? true : false;
}

export default Compare;

//loop1 set no of occurence in our cache obj
//check the value is present in our cache obj or not if its present -1 from the cache obj otherwise leave it
