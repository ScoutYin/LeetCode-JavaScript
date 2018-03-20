## Search Insert Position

### Question

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

#### Example 1:

```shell
Input: [1,3,5,6], 5
Output: 2
```
#### Example 2:

```shell
Input: [1,3,5,6], 2
Output: 1
```
#### Example 3:

```shell
Input: [1,3,5,6], 7
Output: 4
```
#### Example 4:

```shell
Input: [1,3,5,6], 0
Output: 0
```

### Solution
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const index = nums.indexOf(target);
  if (index > -1) return index;
  let mid, left = 0, right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    }
  }
  return left;
};
```
**时间复杂度**为O(logn)