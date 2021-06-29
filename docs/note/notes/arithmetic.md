## 冒泡排序

```js
const arr = [4, 4, 3, 2, 5, 9, 8, 7, 6];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
bubbleSort(arr);
console.log(arr); //[2,3,4,4,5,6,7,8,9]
```

## 删除有序数组重复项返回新长度

```js
function test(nums) {
  // return nums.filter((item, index) => {
  // 	return nums.indexOf(item) === index
  // }).length;
  const n = nums.length;
  if (nums === null || n === 0) {
    return 0;
  }
  let fast = 1;
  let slow = 0;
  while (fast < n) {
    if (nums[slow] !== nums[fast]) {
      nums[slow + 1] = nums[fast];
      slow++;
    }
    fast++;
  }
  nums.splice(slow + 1);
  return slow + 1;
}
```
