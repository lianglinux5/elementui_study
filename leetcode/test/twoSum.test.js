import twoSum from '../twoSum_01'

test('twoSum([1...,10000],10001)=[0,9999]', () => {
  var arr = []
  var num = 10000
  for (var i = 0; i < num; i++) {
    if (i === 0 || i === num-1) {
      arr[i] = i + 1
    } else {
      arr[i] = 0
    }
  }
  expect(twoSum(arr, num+1)).toEqual([0, num-1])
})
