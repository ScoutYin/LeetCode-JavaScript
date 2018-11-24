## 最长公共前缀

> [领扣-最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/description/)

### Question

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

所有输入只包含小写字母 a-z 。

#### Example:
```shell
输入：["flower","flow","flight"]
输出："fl"
```

```shell
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

### Solution
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (!strs.length || strs[0] === '') return ''
  if (strs.length === 1) return strs[0]
  let index = 1
  let last = ''
  let prefix = ''
  const check = () => {
    prefix = strs[0].substring(0, index)
    if (last === prefix) return
    const isCommon = strs.every(str => str.indexOf(prefix) === 0) 
    if (isCommon) {
      last = prefix
      index++
      check()
    }
  }
  check()
  return last
}
```

### 需注意的的几种情况

输入：`[]`、`[""]`、`["a"]`、`["a", "a"]`