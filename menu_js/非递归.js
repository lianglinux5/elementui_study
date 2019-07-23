let list=[
    {"id":1,name:"部门A",parentId:0},
    {"id":2,name:"部门B",parentId:0},
    {"id":3,name:"部门C",parentId:1},
    {"id":4,name:"部门D",parentId:1},
    {"id":5,name:"部门E",parentId:2},
    {"id":6,name:"部门F",parentId:2},
    {"id":7,name:"部门G",parentId:3},
    {"id":8,name:"部门H",parentId:4},
    {"id":9,name:"部门I",parentId:7},
    {"id":10,name:"部门J",parentId:8}
]
/*
for(var i=11;i<=100000;i++){
     var obj={"id":i,name:`部门${i}`,parentId:0}
     list.push(obj)
}
*/

/**
 * 非递归生成菜单
 * @param  list 
 */
function convert(list){
     let tree = []
    let map = list.reduce((res,item)=>(
       res[item.id]=item,res
    ),{})
    list.forEach(item=>{
       if(item.parentId!==0){
          map[item.parentId].children?map[item.parentId].children.push(item):map[item.parentId].children=[item]
       }else{
         tree.push(item)
       }  
    })
}
let start = new Date().getTime();
console.log(convert(list));

console.log((new Date().getTime()-start)+" ms");