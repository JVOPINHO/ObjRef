module.exports = class ObjRef {
    constructor(obj) {
        if(typeof obj != "object" && obj != undefined) throw new Error("<ObjRef> constructor must be a object.")
        this.obj = obj || criarObj()
    }
    
    ref(path) {
        if(typeof path != "string" && path != undefined) throw new Error("<ObjRef>.ref() must be a string.")
        if(!path) path = ""
        return {
            val: () => {
                let value = refVal(this.obj, path)
                return value
            },

            set: (value) => {
                if(!path && typeof value != "object") throw new Error("<ObjRef>.ref(...).set() must be a object.")
                else if(!path && typeof value == "object") return this.obj = value
                else {
                    let k = String(path).split("/");
                    let b = this.obj;
                    while (k.length > 1) {
                        const a = k.shift();
                        b = b[a] = b[a] || {};
                    }
                    b[k] = value;
                
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

function refVal(obj, string) {
    let array = string.split("/").filter(x => x)
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