// [1,2,3] 5
var twoSum = function(arr=[],target){
    var map  = {}
    for(var i=0;i<arr.length;i++){
        var num = target-arr[i]
        if(map[num]!=undefined){
            return [map[num],i]
        }
        map[arr[i]] = i
    }
    return []
}
var num=1000000;
var arr=new Array(num).fill(0)

for(var i=0;i<num;i++){
    arr[0] = 1
    arr[num-1]= num
}
var start=new Date().getTime()
console.log(twoSum(arr,num+1));
console.log(new Date().getTime()-start+" ms");