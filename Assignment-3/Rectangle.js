
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    
}
var rect1=new Rectangle(4,5);
alert(rect1.width+","+rect1.height);
Rectangle.prototype.getArea=function(){
    return this.width*this.height;
}
alert(rect1.getArea());
