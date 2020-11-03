//page2 question 5

var reject=[]
var final=[]
count=0
var a =["quick", "quit"]
for(i=0; i<a.length; i++)
    {
        if (a[i].includes("q")) {
            reject.push(a[i])
            
        } else {
            final.push(a[i])
        }
    }

for(j=0; j<final.length; j++)
    {
        count += (final[j].length)
    }
console.log(count)