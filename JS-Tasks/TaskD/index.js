function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2, 3, "test"], [1, 2, 3, "test"]));
console.log(compareArrays([1, 2, 3, 4], [1, 2, 3]));
console.log(compareArrays([1, 2, 2], [1, 2, 3]));

// Girilen iki arrayin icindeki elementleri qarsilasdiran ve eger eynidirse true deyilse false qaytaran funksiya yaradin.
