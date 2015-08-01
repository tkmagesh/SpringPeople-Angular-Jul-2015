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

/* Async using callback*/
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

/* Async using events */
function getAdder(){
    var _callbacks = [];
    return {
        add : function(x,y){
            console.log("[SP] received the values");
            setTimeout(function(){
                var result = x + y;
                console.log("[SP] returning the result");
                _callbacks.forEach(function(callback){
                    callback(result);
                })
            },3000);
        },
        addCallback : function(callback){
            _callbacks.push(callback);
        }
    }
}


var adder = getAdder();
adder.addCallback(function(result){
    console.log("[SC] result = ", result);
});
adder.add(100,200);





























