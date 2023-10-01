
var num =prompt("Q1 : Enter your number ","");
alert("The number is "+num);

var num1 =parseInt(prompt("Q2 : Enter your First number ",""));
var num2 =parseInt(prompt("Q2 : Enter your Second number ","")); 
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


/***************************** LOOP *********************************/ 

//Q7:
for(var i=0; i<=5 ; i++){
    alert("Q7 : "+i);
}
 

//Q8:
var num="";
for(var i=0; i<=5 ; i++){
   num= num+i;
}
 alert("Q8 : "+num);


//Q9:
var multiplyNum=""
for(var i=0; i<=20 ; i++){
    if(i%3==0){
        multiplyNum+= i+" "; 
    }
 }
 alert("Q9 : "+multiplyNum);

//Q 10:

 var num=parseInt(prompt("Q 10 :please enter num from 0 - 100",""));
while(num<0 ||num>100){
 num=parseInt(prompt("Error : Enter a valid number ",""));
}
alert("Valid number :)");


 //Q 11:
 var num=parseInt(prompt("Q 10 :please enter somthing that is not a number",""));
while(isNaN(num)){
 num=parseInt(prompt("Error : Enter a valid number ",""));
}
alert("Valid number :)");


//Q 12:
var sum=0;
var num=parseInt(prompt("Q 12 :please enter num ",""));
for(var i=0; i<= num; i++){
    sum+=i;
}
alert("The total sum from '0' to the num you enter "+sum);

//Q 13:

var sum=0;
var avg=0.0;
var count =0;
var num=parseInt(prompt("Q 13 :please enter num to count avarage ",""));
for(var i=0; i<= num; i++){
    count++;
    sum+=i;
    avg =sum/count;
}
alert("The total sum from '0' to the num you enter "+avg);


