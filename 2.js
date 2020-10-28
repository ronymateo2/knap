function solution(arr, n) {
  const result = [];

  const knapSack = (arr, sum, currentIndex, acc = []) => {
    if (sum == 0) {
      result.push(acc);
      return;
    }

    if (currentIndex >= arr.length) {
      return;
    }

    let visited1 = [...acc];
    if (arr[currentIndex] <= sum) {
      visited1.push(arr[currentIndex]);
      knapSack(arr, sum - arr[currentIndex], currentIndex + 1, visited1);
    }

    let visited2 = [...acc];
    knapSack(arr, sum, currentIndex + 1, visited2);
  };

  knapSack(arr, n, 0);

  return result;
}

console.log(
  solution([4, 3, 2, -1, 7, 5, 1, 2, 3, 5, 1, 2, 2, 4, 1, -2, 3, 5, -1, 6], 9)
); // (o(2^n))
