class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        console.log(actualCode,", ", enteredCode)
       // text(code,300,300) 
        if(actualCode === enteredCode){
            console.log(enteredCode);
            console.log(actualCode);
            return actualCode,enteredCode;
        }
        //add code to return true if correct answer entered.

        
    }

}