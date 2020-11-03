// list1=[10,56,9,21,34]
// list1.sort()
// console.log(list1[-1])

//page 4 Q11

var list=[20,34,6,67,34]

function largest( list){
    var max=list[0]
    for (i = 0; i < list.length ; i++) {
        if (list[i] > max) 
            max = list[i]; }
  
    console.log(max); 

}
