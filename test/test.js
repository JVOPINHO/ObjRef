const ObjRef = require("../src/ObjRef")
let m = {
    a: {
        b: "a"
    },
    c: {
        d: "c"
    }
}

let obj = new ObjRef(m)

obj.ref().delete()

console.log(obj.obj)