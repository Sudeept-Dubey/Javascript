var result = [];
var result1 = [];
function map(square,a) {
 
    for(var i=0;i<=a.length-1;i++)
     result.push(square(a[i]))
    return result;
  }
  
  var square = function(x) {
     return x*x;
  }
  
  var value=[1,2,3,4];
  var final= map(square,value);
  console.log(final);

  function map(squareRoot,b){
      for(var j=0;j<=b.length-1;j++)
      {
        result1.push(squareRoot(b[j]))
      }
      return result1;
  }
   var squareRoot = function(x){
        return(Math.sqrt(x))
   }

   var value=[1,4,9,16];
  var final1= map(squareRoot,value);
  console.log(final1);