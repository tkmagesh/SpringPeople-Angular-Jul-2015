/*  Sync  */
function add(x,y){
    console.log("[SP] received the values");
    var result = x + y;
    console.log("[SP] returning the result");
    return result;
}

function addClient(x,y){
    console.log("[SC] triggering add");
    var result = add(x,y);
    console.log("[SC] result = ", result);
}

/* Async */
function addAsync(x,y,onResult){
    console.log("[SP] received the values");
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning the result");
        if (typeof onResult === "function")
            onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log("[SC] triggering add");
    addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}
