### 时间分段

指定格式为`06:30`或`6:30`的时间起点和终点，以及每个时间段的长度（分钟），得到一个划分好的的数组

```javascript
const timeSegment = (start, end, step) => {
	const res = []
	const zeroFill = (num) => {
		return num < 10 ? `0${num}` : `${num}`
	}
	const _segment = (start, end, step) => {
		let arr = start.split(':').concat(end.split(':'))
		arr = arr.map(item => parseInt(item))
		let temp = arr[1] + step
		let tempHour = Math.floor(temp / 60)
		let tempMis = temp % 60
		let hour = tempHour + arr[0]
		if (arr[0] > arr[2] || arr[0] === arr[2] && arr[1] >= arr[3]) {
			if (hour >= 24) {
				hour -= 24
			}
		} else {
			if (hour > arr[2] || arr[2] === hour && tempMis > arr[3]) {
				res.push(`${start}-${end}`)
				return res
			}
		}
		let minute = zeroFill(tempMis)
		hour = zeroFill(hour)
		let resEnd = `${hour}:${minute}`
		res.push(`${start}-${resEnd}`)
		return resEnd === end ? res : _segment(resEnd, end, step)
	}
	_segment(start, end, step)
	return res
}

// test case 1
const result1 = timeSegment('08:30', '09:00', 45)
console.log('result1', result1)
// test case 2
const result2 = timeSegment('06:30', '06:30', 45)
console.log('result2', result2)
// test case 3
const result3 = timeSegment('06:30', '06:00', 45)
console.log('result3', result3)
```