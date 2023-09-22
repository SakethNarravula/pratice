let array=[1,2,3,4];
// array.forEach(function(ele,index,arr){(console.log(ele))})
// let s=["HTML","CSS","JAVASCRIPT","BOOTSTRAP","REACT JS","REDUX","GIT","GITHUB"]
// s.forEach((value)=>console.log(value))
// let fe=s.map((value)=>(value+"_is a _Frontend technology"))
// console.log(fe)
// let j=array.map((ele)=>(ele*3))
// let j=array.map((ele)=>(ele%2==0))
// console.log(j)
// let res=array.filter((value)=>(value%2==0))
// console.log(res)
let red=array.reduce((pv,cv)=>(pv%cv))
console.log(red)