//Global scope is the context where everything in JavaScript program executes by default. It is the entire Javascript execution environment.
//Variables declared outside of a block or any function become global variables. Global variables can be accessed and modified from any function. 


    var userName = "Bill";

    function modifyUserName() {
            userName = "Steve";
        };

    function showUserName() {
            alert(userName);
        };

            function createUserName() {
        userName = "Bill";
    }

    function modifyUserName() {
        if(userName)
            userName = "Steve";
    };

    function showUserName() {
        alert(userName);  
    }

//Local scope is a characteristic of variables that makes them local.
// A local variable, however, has a limited scope: it exists only within the block that it is declared in. Once that block ends, the variable is destroyed and its values lost. A local variable of the same name declared elsewhere is a different variable. A local variable can even exist multiple times simultaneously, if its block is entered again before it's exited - i.e. a recursive function call. Each call of the function will have a distinct local variable.
//Variables declared inside any function with var keyword are called local variables. Local variables cannot be accessed or modified outside the function declaration.


let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}