## Count And Say

### Question

The count-and-say sequence is the sequence of integers with the first five terms as following:

```shell
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2`, then `one 1"` or `1211`.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.
#### Example 1:

```shell
Input: 1
Output: "1"
```
#### Example 2:

```shell
Input: 4
Output: "1211"
```

### Solution
```javascript
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  const reg = /(\d)\1*/g;
  let i = 1, say = '1', arr;
  while (i < n) {
    arr = say.match(reg);
    let str = '';
    arr.forEach(item => {
      str += (item.length + item.charAt(0));
    })
    say = str;
    ++i;
  }
  return say;
}
```
