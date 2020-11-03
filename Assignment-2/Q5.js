function isEven(num){
    return(num%2==0)
}

console.log(isEven(3))
console.log(isEven(4))



function find(a,isEven){
    for(var i=0;i<a.length;i++)
    {
       if(isEven(a[i])){
           return a[i]

       }
    }
}

var a = [1,3,5,4,2]
var final= find(a,isEven);
  console.log(final);