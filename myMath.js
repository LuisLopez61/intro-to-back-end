modules.export = {
    test: function()
    {
        console.log("called!");
        return "Test";
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num2, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){

        if(num2 == 0){
            console.log("Error, you should not divide by zero");
        }
        else{
            return num1 / num2;
        }
    },

    smaller: function(num1,num2){
        if(num1 < num2) return num1;
        return num2;
    },

    Even: function (value){
        if(value %2== 0)
            return true;
        else{
            return false;
        }
    } 
    
};