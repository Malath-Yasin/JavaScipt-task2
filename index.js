
var num =prompt("Q1 : Enter your number ","");
alert("The number is "+num);

var num1 =prompt("Q2 : Enter your First number ",""); //if i use parseInt every thing work ok 
var num2 =prompt("Q2 : Enter your Second number ","");//if i use parseInt every thing work ok 
if(num1==num2){
    alert("The numbers is equal ");
}else if(num1<num2){
    
    alert(num1 +" , "+ num2 );//Q3
    alert("Q4 :The grater is "+ num2);
    var sum=(num1+num2);
    alert("Q5 : The sum = " +sum); 
//the problem is : when i sum the two numbers it print them as string but if i use parseInt method every thing work ok  
}else if(num2<num1){
    alert(num2 +" , "+ num1);//Q3
    alert("Q4: The grater is "+ num1);
    var sum=(num1+num2);
    alert("Q5 : The sum = " +sum);
//the problem is : when i sum the two numbers it print them as string but if i use parseInt method every thing work ok  

}

var numWrite =prompt("Q6 : Enter number ");
switch(numWrite){
    case "1":
        alert("Num is One");
        break;
     case "2":
        alert("Num is Two");
        break;
    case "3":
        alert("Num is Three");
        break;
    case "4":
        alert("Num is four");
        break;
    case "5":
        alert("Num is five");
        break;
    case "6":
        alert("Num is six");
        break;
    case "7":
        alert("Num is seven");
        break;
    case "8":
       alert("Num is eight");
         break;
    case "9":
        alert("Num is nine");
        break;
default:
    alert("Pleae try again");
}