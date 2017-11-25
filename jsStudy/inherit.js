function inherit(p){
    var t = typeof p;
    if(t !== "object" && t !== "function") throw new TypeError();
    if(Object.create){
        return Object.create(p);
    }
    var f = function(){};
    f.prototype = p;
    return new f();
}