/**
 * 反转字符串
 * @param {} s 
 */
var reverseWords = function(s='') {
    var arr = s.split(" ");
    return arr.map(str=>{
        return str.split('').reverse().join('')
    }).join(" ")
    
};
