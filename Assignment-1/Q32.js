//page 4 Q 15
cumsum = [];
j = [0,1,2,3,4];

for(var a=0;a<j.length;a++) {
  if(a==0){
       cumsum[a] = j[0]
    }
  else{ 
      cumsum[a] = cumsum[a-1] + j[a]
    }
}
console.log(cumsum)