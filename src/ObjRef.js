const setValue = require("./setValue")

module.exports = class ObjRef {
    constructor(obj, sep = "/") {
        if(typeof obj != "object" && obj != undefined) throw new Error("<ObjRef> constructor must be a object.")
        this.obj = obj || criarObj()
        
        if(typeof sep != "string" && obj != undefined) throw new Error("<ObjRef> constructor separator must be a string.")
        this.sep = sep || "/"
    }
    
    ref(path) {
        if(typeof path != "string" && path != undefined) throw new Error("<ObjRef>.ref() must be a string.")
        if(!path) path = ""
        return {
            val: () => {
                let value = refVal(this.obj, path, this.sep)
                return value
            },

            set: (value) => {
                if(!path && typeof value != "object") throw new Error("<ObjRef>.ref(...).set() must be a object.")
                else if(!path && typeof value == "object") return this.obj = value
                else {
                    this.obj = setValue(this.obj, path, value, this.sep)
                
                    return this.obj;
                }
            }
        } 
    }
}

function criarObj() {
    let obj = {}
    return obj
}

function refVal(obj, string, sep = "/") {
    let array = string.split(sep).filter(x => x)
    let valor = obj;
    for(let element of array.filter(x => x)) {
      if(valor != undefined && valor != null) valor = valor[`${element}`]
      else {
        valor = undefined;
        break;
      };
    }

    return valor
}