 var lengthOfLongestSubstring = function(s=''){
     var n = s.length
     var set = new Set();
     var ans=0,i=0,j=0;
     while (i < n && j < n) {
        // try to extend the range [i, j]
        if (!set.has(s[j])){
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        }
        else {
          set.delete(s[i++]); 
            // 错误代码
            // set = new Set();
            // i=j
            
           
        }
    }
    return ans;
 }
 //pwwkew  dvdf abccdefg
 console.log(lengthOfLongestSubstring("pwwkew"));
 
/**
 * 暴力破解，超时
 */

 /*
var lengthOfLongestSubstring = function(s=''){
   var n = s.length
   var ans = 0;
   for(var i=0;i<n;i++){
       for(var j=i+1;j<=n;j++){
           if(allUnique(s,i,j)){
              ans=Math.max(ans,j-i)
           }
       }
   }
   return ans;
}

function allUnique(s='',start=0,end=0){
    var set = new Set();
    for(var i=start;i<end;i++){
        var c = s[i];
        if(set.has(c)) return false
        set.add(c)
    }
    return true
}
*/
// i=0
//abcb