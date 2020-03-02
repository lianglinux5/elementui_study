let tree=[
    {
      id:1,name:'0001',
      children:[
          {
              id:2,name:'0002',
              children:[
                  {
                      id:3,name:'0001',
                      children:[
                          {id:4,name:'0001'},
                          {id:5,name:'0002'},
                      ]
                  }
              ]
          }
      ]  
    }
];

function getData1(treeData=[],name){
   return  treeData.reduce((prev,current)=>{
        if(current.name===name){
          prev+=1;
        }
        if(current.children){
            prev+=getData1(current.children,name);
        }
        return prev;
    },0)
}

function getData(treeData=[],total={}){
    treeData.forEach(item=>{
         let itemName = item.name;
            if(!total[itemName]){
                total[itemName]=0;
            }
            total[itemName]=total[itemName]+1;
            if(item.children){
                total = getData(item.children,total)
            }
         
         
    });
    return total;
}

let user={
   address:{
       province:"河北省",
       detail:{
          num:001
       }
   }
}
let addressStr='address.detail.num';
let address = addressStr.split('.').reduce((prev,current)=>{
      return prev[current];
},user) || "";
console.log('num:',address);


console.log(getData(tree));
console.log(getData1(tree,'0001'));