function receivesAFunction(name) {
name();
}

function returnsANamedFunction() {
    return function name(){}
} 
function returnsAnAnonymousFunction(){
    return function(){}
}