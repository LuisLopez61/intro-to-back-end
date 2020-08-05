/**
 * clear: will clear
 * 
 * 
 * change directory: cd space then drag folder
 * 
 * 
 * 
 * 
 * 
 */

 //imports
  var myMath = required("./myMath");

 function test(){
     var name = "Your name";
     var age = 23;

     console.log(name);

     if(age < 60){
         console.log("you are still young");
     
         }
         else{
             console.log("sorry you are getting old");
         }
     
         for(let i = 3; i<13; i++){
             if(i !=7){
                 console.log(i);
             }
         }

         var names = [];
         names.push("luis");
         names.push("kenny");
         names.push("letty");
         names.push("ebbonai");
         names.push("desir");
         
         //print the names in reverse order
         for(let j = names.length - 1; j >=0;j --){

            console.log(names[j]);
         }


 }


 function init(){

    console.log("Hello NodeJS");

    //test();

    myMath.test();

    var res = myMath.sum(21, 21);
    console.log("sum:" + res)

    var nad = myMath.divide(1,0);
    console.log("bad: " + bad);

    var good = myMath.divide(123,3);
    console.log("good: " + good);

    var g1 = myMath.greater(34,78,2);
    console.log(g1);//78

    var g2 =myMath.greater(-9,0,200);
    console.log(g2) //200

    var even = myMath.isEven(264);
    console.log(even); //true

    var odd = myMath.isEven(777);
    console.log(odd); //false

 }




init();

