// Input: A = [4, 3, 2, 16, 7, 5], N = 9
// Output: [4,5], [4,3,2], [2,7]
// Note: [4,2,3] and [3,4,2] should be considered one subarray as both contain same

/**
 * 
 * @param {Array[number]} A 
 * @param {number} N 
 */
function solution(A,N){
    let visited = [];
    function knapSack(arr, sum, currentIndex, cVisited = []){
        if(sum === 0){
            visited.push(cVisited)
            return;
        }

        if(arr.length === 0 || currentIndex >= arr.length){
            return;
        }

        let visited1 = [...cVisited]
        if(arr[currentIndex] <= sum){
             visited1.push(arr[currentIndex])
             knapSack(arr, sum - arr[currentIndex], currentIndex+1, visited1);
        }
        let visited2 = [...cVisited]
        knapSack(arr,sum,currentIndex+1,visited2)
    }

     knapSack(A,N,0)
     return visited
}

console.log(solution([4, 3, 2, 16, 7, 5],9))