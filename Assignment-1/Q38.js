function create_table(){
    var row=Number(document.getElementById("rows").value);
    var colm=Number(document.getElementById("col").value);
    var i=0,j=0;
    var y,x;
    for(i=0;i<row;i++){
        x=document.createElement("TABLE");
        x.setAttribute("id","myTable");
        document.body.appendChild(x);

        y=document.createElement("TR");
        y.setAttribute("id","1");
        document.body.appendChild(y);

        z=row.insertCell()

        for(j=0;j<colm;j++){
            y=x.insertCell(j);
            alert("Row: "+row+" Column: "+colm);
        }
    }
    
}