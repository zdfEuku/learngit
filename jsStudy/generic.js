var generic = {
    //注意， 构造函数的名字属性是非标准的，并不是所有环境中都可用
    toString:function(){
        var result = '';
        result += '[';
        if(this.constructor && this.constructor.name){
            result += this.constructor.name + ': ';
        }
        var n = 0;
        for(var key in this){
            if(this.hasOwnProperty(key)){
                var val = this[key];
                if(typeof val === 'function'){
                    continue;
                }
                if(n++) result += ' ,';
                result += key + '=' + val;
            }
        }
        result += ']';
        return result;
    },
    //通过比较this和that的构造函数和实例属性来判断它们是否相等
    //这种方法只适合于那些实例属性是原始值的情况，原始值可以通过"==="来比较
    //这里还处理一些特殊情况，总是忽略由Set类添加的特殊属性
    equals:function(that){
        if(that == null) return false;
        if(this.constructor !== that.constructor) return false;
        for(var key in this){
            if (key === "|**objectid**|") continue;
            if(!this.hasOwnProperty(key)) continue;
            if(this[name] != that[name]){
                return false;
            }
        }
        return true;
    }
};