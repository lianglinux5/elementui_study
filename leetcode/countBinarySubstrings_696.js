export default (str='') =>{
  let result=[]
  
  let match = (str) =>{
      let s1 = str.match(/^(0+|1+)/)[0]
      let s2 = (s1[0]^1).toString().repeat(s1.length)
      let s=`${s1}${s2}`
      if(str.startsWith(s1+s2)){
          return s
      }
      return ''
      
    //   if(s===str.slice(0,s1.length*2)){
    //       return s
    //   }
    //   return ''
       
      
      //使用正则如果表达式很长，会报错
      /*
      var reg=new RegExp(`^(${s})`)
      if(reg.test(str)){
          return s
      }
      return ''
      */  

      /*
      //错误代码,indexOf用来判断是否包含指定的字符串，可能不是以该字符串开头
       if(str.indexOf(s)!==-1){
          return s
       }
      return ''
     */
      
  }

  for(var i=0;i<str.length-1;i++){
      let matchStr = match(str.slice(i))
      if(matchStr){
          result.push(matchStr)
      }
  }
  return result;
}
