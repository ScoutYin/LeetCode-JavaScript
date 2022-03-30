# 题目

[剑指 Offer 64. 求1+2+…+n](https://leetcode-cn.com/problems/qiu-12n-lcof/)

# 思路

这道题比较容易想到用递归，但是题目要求不能使用条件判断相关关键字和语句，所以可以使用`&&`的短路机制来作为递归的终止方式

# 代码

```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
	n && (n += sumNums(n - 1));
	return n;
};

console.log(sumNums(3));
```