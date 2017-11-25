function extend(){
    if(arguments.length == 0){
        return null;
    }
    if(arguments.length == 1){
        return arguments[0];
    }
    var obj = arguments[0];
    for(var j = 1; j < arguments.length; j++){
        var obj2 = arguments[j];
        for(var key in obj2){
            if(obj2.hasOwnProperty(key)){
                obj[key] = obj2[key];
            }
        }
    }
    return obj;
}