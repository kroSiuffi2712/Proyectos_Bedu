console.log(this);

function foo(){
    console.log(this);
}

foo();

function logThis(){
    console.log("Is this === window?" + (this===window));
}

var fooOb={
    logThis:logThis //Is this  === window? true
}

logThis();
fooOb.logThis(); //Is this  === window? false