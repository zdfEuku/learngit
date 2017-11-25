function Set(){
    this.values = {};
    this.n = 0;
    this.add.apply(this, arguments);
}

Set._v2s = function(val){
  switch (val){
      case undefined: return 'u';
      case null: return 'n';
      case true: return 't';
      case false: return 'f';
      default:{
          switch (typeof val){
              case 'number': return '#' + val;
              case 'string': return '"' + val;
              default: return '@' + objectId(val);
          }
      }
  }

  function objectId(o) {
      var prop = '|**objectid**|';
      if(!o.hasOwnProperty(prop)){
          o[prop] = Set._v2s.next++;
      }
      return o[prop];
  }
};

Set._v2s.next = 100;

Set.prototype.add = function(){
  for(var j = 0; j < arguments.length; j++){
      var val = arguments[j];
      var str = Set._v2s(val);
      if(!this.values.hasOwnProperty(str)){
          this.values[str] = val;
          this.n++;
      }
  }
  return this;
};

Set.prototype.size = function(){
    return this.n;
}

Set.prototype.remove = function(){
    for(var j = 0; j < arguments.length; j++){
        var str = Set._v2s(arguments[j]);
        if(this.values.hasOwnProperty(str)){
            delete this.values[str];
            this.n --;
        }
    }
    return this;
};

Set.prototype.contains = function(value){
    return this.values.hasOwnProperty(Set._v2s(value));
};

Set.prototype.foreach = function(f, context){
    for(var s in this.values){
        if(this.values.hasOwnProperty(s)){
            f.call(context, this.values[s]);
        }
    }
};

/*扩展， 工厂方法*/
Set.fromArray = function(ary){
    var s = new Set();
    s.add.apply(s, ary);
    /*for(var j = 0; j < ary.length; j++){
        s.add(ary[j]);
    }*/
    return s;
};
