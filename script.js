
//first program
let arr = [1,2,3,4,5,6,7,8,9];
let max = 0;
let min = 10;

for(let i = 0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if (arr[i]<min){
        min = arr[i];
    }
}
console.log("the largest and smallest number in the array ")
console.log(max);
console.log(min);
//second program
let arr1 = [1,2,3,4,5,6,7,8,9];
arr1.push(10)
console.log("push "+arr1)
arr1.pop();
console.log("pop "+arr1)
arr1.unshift(0);
console.log("unshift "+arr1)
arr1.shift()
console.log("shift "+arr1)
//third program
console.log("sorting of arrays");

let arr2 = [7,8,9,6,5,4,3,2,1];

let arr3 = arr2.sort();

console.log(arr3);
//fourth program
console.log("merging of array");
let arr4 = arr1 - arr2;
console.log(arr4);
//fifth program
console.log("Searching");
console.log(arr2.indexOf(1));

console.log(arr2.lastIndexOf(5))

