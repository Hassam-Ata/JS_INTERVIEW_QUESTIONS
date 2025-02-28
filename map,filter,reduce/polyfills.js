let myArray=[1,2,3,4,5]
//Polyfill for map
// Array.prototype.myMap=function(cb){
//     let temp=[]
    
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this))
//     }
    
//     return temp;
// }


// console.log(myArray.myMap((nums)=>{
//     return nums*3;
// }))


//Polyfill for filter

// Array.prototype.myFilter=function(cb){
//     let temp=[]
    
//     for(let i=0;i<this.length;i++){
        
//         if(cb(this[i],i,this)){
//         temp.push(this[i])
//         }
//     }
    
//     return temp;
// }

// console.log(myArray.myFilter((nums)=>{
//     return nums>2;
// }))

//Polyfill for reducer

Array.prototype.myReduce=function:Inter(cb){
    let initialValue=0;
    let accumulator=initialValue;

    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],this):this[i];
    }


  return accumulator;
}

console.log(myArray.myReduce((acc,curr)=>{
    return acc+curr
},0))
