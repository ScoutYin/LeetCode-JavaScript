## Maximum Swap

Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

### Example 1:

```javascript
Input: 1993
Output: 9913
Explanation: Swap the number 1 and the second number 9.
```

### Example 2:

```javascript
Input: 9973
Output: 9973
Explanation: No swap
```

### Note:

The given number is in the range [0, 10^8]

### Solution

```javascript
const maximumSwap = function(num) {
  const arr = ''.split.call(num, '')
  const swapArr = (arr) => {
    const max = Math.max.apply(null, arr).toString()
    const lastIndex = arr.lastIndexOf(max)
    if (lastIndex > 0 && arr[0] !== max) {
      arr[lastIndex] = arr[0]
      arr[0] = max
    } else {
      return arr.length > 1 ? [arr[0]].concat(swapArr(arr.slice(1))) : arr
    }
    return arr
  }
  const numArr = swapArr(arr)
  return parseInt(numArr.join(''))
}
```

需要注意的点：

- 取到最大的那个数字`max`在数组中的索引值`lastIndex`，这里要考虑到如果这个数字存在多个时，应取最后一个的索引
- 得到最大数字索引`lastIndex`后判断是否大于0，这里还应判断这个最大的数字是否等于数组中第一个数字（排除这个最大数字有多个的情况）
- 如果`lastIndex > 0`并且最大数字`max !== arr[0]`，则直接对这个最大数字与`arr[0]`进行位置互换
- 否则就需要利用递归对后面的数字进行类似操作，最终得出一个换过一次位置的数组，再由这个数组得到换位后的数