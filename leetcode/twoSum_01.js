function twoSum (nums, target) {
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    var num = target - nums[i]
    if (map[num] !== undefined) {
      return [map[num], i]
    }
    map[nums[i]] = i
  }
  return []
}
export default twoSum

/**
 *  LeetCode 三中解法
 *
 */

/*
var twoSum=function(nums,target){
    var result=[];
   for(var i=0;i<nums.length-1;i++){
     for(var j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            result.push(i,j);
        }
     }
   }
    return result;
}
*/

/*
var twoSum=function(nums=[],target){
    var map={};
    for(var i=0;i<nums.length;i++){
        map[nums[i]]=i;
    }
    for(var i=0;i<nums.length;i++){
        var num=target-nums[i];
        if(map[num]!=undefined && map[num]!==i){
            return [i,map[num]];
        }
    }

    return [];
}
*/
// 测试性能

/*
var arr=[];
for(var i=0;i<7000000;i++){
    if(i===0 || i===7000000-1){
        arr[i]=i+1;
    }else{
        arr[i]=0;
    }

}
var start = new Date().getTime();
console.log(twoSum(arr,7000001));
console.log((new Date().getTime()-start)+" ms");
*/
