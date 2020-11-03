function person(fname,lname,age,skills,dateofbirth,address,married,profession)
 {
 this.fname=fname;
 this.lname=lname;
 this.age=age;
 this.skills=skills;
 this.dateofbirth=dateofbirth;
 this.address=address; 
 this.married=married;
 this.profession=profession;
 }
amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
abhisheik=new person("abhisheik",21,["HTML"],"08/06/1997","false","jr analyst")
Aaradhaya= new person("Aaradhaya",15,["python"],"09/08/2000","false")
var abhisheik=Object.create(amithab);
var Aaradhaya=Object.create(amithab);
// var Aaradhaya=Object.create(abhisheik);

// abhisheik.lname=amithab.lname
// abhisheik.address=amithab.address
print=function()
{
//  console.log(amithab);
    console.log(Aaradhaya.lname);
    console.log(Aaradhaya.address);
    console.log(Aaradhaya);

}();