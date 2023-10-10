// B.
// 1. Bir integer return edən funksiya yaradın. Bu funksiya parametr olaraq integer array alır.
// 2. Nəzərə alaq ki bu funksiyada hər elementdən 2 dəfə təkrarlanır. Sadəcə təkrarlanmayan bir element var. Funksiya bu elementi return eləməlidir.
// Example:
//     func([2, 2, 3, 5, 6, 9, 6, 5, 9]) => return 3
//     func([1, 5, 7, 8, 7, 1, 5]) => return 8
//     func([2, 0, 1, 2, 1]) return 0

function singleElement(arr) {
  let count = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (count[currentElement]) {
      count[currentElement]++;
    } else {
      count[currentElement] = 1;
    }
  }

  for (const element in count) {
    if (count[element] === 1) {
      return element;
    }
  }

  return "Tekrarlanmayan eded yoxdur";
}

console.log(singleElement([2, 2, 3, 5, 6, 9, 6, 5, 9]));
console.log(singleElement([1, 5, 7, 8, 7, 1, 5]));
console.log(singleElement([2, 0, 1, 2, 1]));
